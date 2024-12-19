import { ref, computed } from "vue";
import { Timer } from "@/features/timer";
import { TimerStatus } from "@/utils/constants/timer-status";
import { useTaskStore } from "@/store/tasks.store";
import type { Task } from "@/types/Task";

export function useTimer() {
  const timerInstance = new Timer();
  const { addTask } = useTaskStore();

  // Estados reativos
  const timer = ref(timerInstance.time);
  const taskName = ref(timerInstance.currentTask);
  const timerStatus = ref<TimerStatus>(TimerStatus.IDLE);

  const isTimerEnabled = computed(() => taskName.value.length > 0);
  const canEditTask = computed(() => timerStatus.value === TimerStatus.IDLE);

  function updateTimerState() {
    taskName.value = timerInstance.currentTask;
    timerStatus.value = timerInstance.isRunning
      ? TimerStatus.RUNNING
      : TimerStatus.IDLE;
  }

  timerInstance.onTick((time) => {
    timer.value = time;
  });

  function startTask(name: string) {
    try {
      timerInstance.setTaskName(name);
      timerInstance.start();
      updateTimerState();
    } catch (error) {
      console.error(error);
    }
  }

  function stopTask() {
    try {
      const task = timerInstance.stop();
      const finishedTask: Task = {
        durationInSeconds: task.durationInSeconds,
        id: String(Date.now()),
        title: task.title,
      };
      addTask(finishedTask);
      updateTimerState();
      console.log("Task finished:", finishedTask);
    } catch (error) {
      console.error(error);
    }
  }

  function handleToggle() {
    if (timerStatus.value === TimerStatus.IDLE) {
      startTask(taskName.value);
    } else {
      stopTask();
    }
  }

  return {
    timer,
    taskName,
    timerStatus,
    isTimerEnabled,
    canEditTask,
    handleToggle,
  };
}
