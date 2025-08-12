import React from "react";
import { TaskTarget } from "../../common/TaskTarget";
import { taskTarget2 } from "./taskTarget2";

export const Task2 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <TaskTarget target={taskTarget2} />

      <div style={{ width: 400 }}>
        <div></div>
      </div>
    </div>
  );
};
