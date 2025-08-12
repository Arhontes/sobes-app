import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function TasksPage() {
const navigate = useNavigate();

  const tasks = [
    { id: 1, title: "Задание 1", description: "Сделайте что-то интересное 🙂" },
    { id: 2, title: "Задание 2", description: "Продемонстрируйте своё мастерство 💡" },
    { id: 3, title: "Задание 3", description: "Удивите нас своим решением 🚀" },
  ];
  return (
   <Container className="mt-4">
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
                  onClick={() => navigate(`/tasks/task${task.id}`)}
                >
                  Перейти
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
