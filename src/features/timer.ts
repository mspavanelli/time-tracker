import { TimerStatus } from "@/utils/constants/timer-status";

export interface FinishedTask {
  title: string;
  durationInSeconds: number;
}

export class Timer {
  private timerValue: number = 0;
  private taskName: string = "";
  private status: TimerStatus = TimerStatus.IDLE;
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private readonly TIMER_INTERVAL_MS = 1000;

  private onTickCallback: ((time: number) => void) | null = null;

  onTick(callback: (time: number) => void) {
    this.onTickCallback = callback; // Registra o callback
  }

  get isRunning(): boolean {
    return this.status === TimerStatus.RUNNING;
  }

  get isIdle(): boolean {
    return this.status === TimerStatus.IDLE;
  }

  get time(): number {
    return this.timerValue;
  }

  get currentTask(): string {
    return this.taskName;
  }

  setTaskName(name: string): void {
    if (this.isIdle) {
      this.taskName = name;
    } else {
      throw new Error("Cannot edit task name while timer is running");
    }
  }

  start(): void {
    if (this.isIdle && this.taskName) {
      this.startTimer();
      this.status = TimerStatus.RUNNING;
    } else if (!this.taskName) {
      throw new Error("Task name must be set before starting the timer");
    }
  }

  stop(): FinishedTask {
    if (this.isRunning) {
      const finishedTask: FinishedTask = {
        title: this.taskName,
        durationInSeconds: this.timerValue,
      };
      this.reset();
      return finishedTask;
    }
    throw new Error("Timer is not running");
  }

  private startTimer(): void {
    if (!this.timerInterval) {
      this.timerInterval = setInterval(() => {
        this.timerValue++;
      }, this.TIMER_INTERVAL_MS);
    }
  }

  private reset(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timerValue = 0;
    this.taskName = "";
    this.status = TimerStatus.IDLE;
  }
}
