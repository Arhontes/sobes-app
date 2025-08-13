import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { TaskTarget } from "../../../common/TaskTarget";

const defaultTasks: any[] = [
  { id: 1, text: "Задача 1", completed: false },
  { id: 2, text: "Задача 2", completed: false },
  { id: 3, text: "Задача 3", completed: false },
];
const taskTarget1 = {
  description: "",
  points: [],
};
export const Theory1 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <TaskTarget target={taskTarget1} taskNumber={1} />
    </div>
  );
};
