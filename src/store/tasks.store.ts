import type { Task } from "@/types/Task";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", () => {
  const tasks = ref<Task[]>([]);

  function addTask(task: Task) {
    tasks.value.push(task);
  }

  addTask({ durationInSeconds: 1000, id: "1", title: "Task 1" });
  addTask({ durationInSeconds: 2000, id: "2", title: "Task 2" });

  return {
    tasks,
    addTask,
  };
});
