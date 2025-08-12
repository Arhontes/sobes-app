import React from "react";
import App from "./App";
import Layout from "./layout/Layout";
import TasksPage from "./tasks/tasks-page/TasksPage";
import {Task1} from "./tasks/task1/Task1";
import Task2 from "./tasks/task2/Task2";
import Task3 from "./tasks/task3/Task3";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Добро пожаловать! Выберите задание в меню.</div>,
      },
      {
        path: "app",
        element: <TasksPage />,
      },
      {
        path: "tasks/task1",
        element: <Task1 />,
      },
      {
        path: "tasks/task2",
        element: <Task2 />,
      },
      {
        path: "tasks/task3",
        element: <Task3 />,
      },
    ],
  },
];
export default routes;
