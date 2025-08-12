import React, { useState } from "react";
import { taskTarget1 } from "./taskTarget1";
import { Card } from "react-bootstrap";
import { TaskTarget } from "../../common/TaskTarget";

const defaultTasks: any[] = [
  { id: 1, text: "Задача 1", completed: false },
  { id: 2, text: "Задача 2", completed: false },
  { id: 3, text: "Задача 3", completed: false },
];

export const Task1 = () => {
  const [tasks, setTasks] = useState<any[]>(defaultTasks);

  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = (newTaskText: any) => {
    // кандидат реализует логику добавления новой задачи
  };

  const handleRemoveTask = (taskId: any) => {
    // кандидат реализует логику удаления задачи по id
  };

  const handleCompleteTask = (taskId: any) => {
    // кандидат реализует логику переключения completed
  };

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

      <div style={{ width: 400 }}>
        <h3>Список дел:</h3>

        <div>
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
                borderBottom: "1px solid #eee",
                paddingBottom: 4,
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleteTask(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  flexGrow: 1,
                }}
              >
                {task.text}
              </span>
              <button onClick={() => handleRemoveTask(task.id)}>Удалить</button>
            </div>
          ))}
        </div>

        {/* Форма добавления новой задачи */}
        <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
          <input
            type="text"
            placeholder="Новая задача"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            style={{ flexGrow: 1, padding: 6, fontSize: 14 }}
          />
          <button
            onClick={() => {
              handleAddTask(newTaskText);
              setNewTaskText(""); // очистить поле после попытки добавления
            }}
            style={{ padding: "6px 12px", fontSize: 14, cursor: "pointer" }}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
