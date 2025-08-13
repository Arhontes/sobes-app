import React, { useEffect, useState } from "react";
import { TaskTarget } from "../../../common/TaskTarget";
import { User } from "./types";
import { UserService } from "./UserService";

const taskTarget3 = {
  description: "Практическая задача по асинхронности в React",
  points: [
    "Сделать запрос для получения списка пользователей через UserService и вывести данные",
    "Использовать useEffect и useState для асинхронного запроса при отрисовке страницы",
    "Обработать загрузку и ошибки",
    "Какие еще методы Rest API вы знаете?",
  ],
};

export default function Task3() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <TaskTarget target={taskTarget3} taskNumber={3} />

      <div style={{ width: 400 }}>
        {<p>Loading...</p>}
        {<p style={{ color: "red" }}>Ошибка: {error}</p>}
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} — {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
