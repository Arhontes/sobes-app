const mockUsers = [
  { id: 1, name: "Иван", email: "ivan@example.com" },
  { id: 2, name: "Мария", email: "maria@example.com" },
  { id: 3, name: "Петр", email: "petr@example.com" },
];

export const UserService = {
  fetchUsers() {
    return new Promise<any[]>((resolve, reject) => {
      setTimeout(() => {
        // Можно случайно имитировать ошибку
        if (Math.random() < 0.1) {
          reject(new Error("Ошибка при загрузке пользователей"));
        } else {
          resolve(mockUsers);
        }
      }, 1000);
    });
  },
};
