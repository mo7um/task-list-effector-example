import { createStore } from "effector";
import { addTask } from "./events";

export const taskStore = createStore([])
    .on(addTask, (state, task) => [...state, task]) /* В новом массиве развертывается имеющийся массив и добавляется новая задача */