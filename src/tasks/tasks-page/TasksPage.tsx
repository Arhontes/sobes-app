import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function TasksPage() {
  const navigate = useNavigate();

  const theoryTask = [
    { id: 1, title: "Задание 1", description: "Знания FSD-архитектуры" },
    {
      id: 2,
      title: "Задание 2",
      description: "React Hooks 💡",
    },
    { id: 3, title: "Задание 3", description: "Tипизация🚀" },
    { id: 4, title: "Задание 4", description: "CSS" },
  ];

  const tasks = [
    { id: 1, title: "Задание 1", description: "Сделайте что-то интересное 🙂" },
    {
      id: 2,
      title: "Задание 2",
      description: "Продемонстрируйте своё мастерство 💡",
    },
    { id: 3, title: "Задание 3", description: "Удивите нас своим решением 🚀" },
  ];

  const handleTaskClick = (taskId: number) => {
    navigate(`/tasks/task${taskId}`);
  };
  const handleTheoryTaskClick = (taskId: number) => {
    navigate(`/tasks/theory-task${taskId}`);
  };
  return (
    <Container className="mt-4">
      <div>
        <h1 className="mb-4">Теоритические знания</h1>
        <Row>
          {theoryTask.map((task) => (
            <Col key={task.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Text>{task.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleTheoryTaskClick(task.id)}
                  >
                    Перейти
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div>
        <h1 className="mb-4">Практические задания</h1>
        <Row>
          {tasks.map((task) => (
            <Col key={task.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Text>{task.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleTaskClick(task.id)}
                  >
                    Перейти
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
