import React, { useState } from "react";
import {
  Accordion,
  Button,
  ButtonGroup,
  Card,
  Form,
  ListGroup,
} from "react-bootstrap";
import { TaskTarget } from "../../../common/TaskTarget";

const taskTarget1 = {
  description: "Знание и использование типизации в проекте",
  points: [
    "Ответьте на вопросы по типам данных и утилитным типа",
    "Раскажите про опыт использования дженериков. Приведите небольшой пример",
  ],
};

const tsSpecialTypes = [
  { name: "any", description: "Любой тип. Отключает проверку типов." },
  { name: "unknown", description: "Неизвестный тип. Безопаснее any." },
  { name: "never", description: "Тип, который никогда не встречается." },
  {
    name: "void",
    description: "Используется для функций, которые ничего не возвращают.",
  },
  { name: "null", description: "Тип null." },
  { name: "undefined", description: "Тип undefined." },
  { name: "object", description: "Объект любого типа, кроме примитивов." },
  { name: "boolean", description: "true или false." },
  { name: "number", description: "Числа." },
  { name: "string", description: "Строки." },
  { name: "symbol", description: "Уникальные идентификаторы." },
];

const tsUtilityTypes = [
  {
    name: "Partial",
    description: "Какие поля останутся для User обязательными?",
    example: (
      <pre>
        {`type UserBase = { id: string, phone: string };
type UserSpecial = { email: string, age: number };
type User = UserBase & Partial<UserSpecial>;`}
      </pre>
    ),
  },
  {
    name: "Required",
    description: "Какие поля станут обязательными у User?",
    example: (
      <pre>
        {`type User = { name?: string, age?: number };
type FullUser = Required<User>;`}
      </pre>
    ),
  },
  {
    name: "Pick",
    description: "Из каких поле состоит UserPreview?",
    example: (
      <pre>
        {`type User = { name: string, age: number, email: string };
type UserPreview = Pick<User, "name" | "email">;`}
      </pre>
    ),
  },
  {
    name: "Omit",
    description: "Из каких поле состоит UserNew?",
    example: (
      <pre>
        {`type User = { name: string, age: number, email: string };
type UserNew = Omit<User, "email">;`}
      </pre>
    ),
  },
  {
    name: "Record",
    description: "Как будет выглядет объект pageTitles?",
    example: (
      <pre>
        {`type Page = "home" | "about";
const pageTitles: Record<Page, string> = {  };`}
      </pre>
    ),
  },
];

export const Theory3 = () => {
  const [activeSpecialType, setActiveSpecialType] = useState<string | null>(
    null,
  );
  const [activeUtilityType, setActiveUtilityType] = useState<string | null>(
    null,
  );
  const [utilityAnswer, setUtilityAnswer] = useState<string>("");

  const handleSpecialClick = (typeName: string) => {
    setActiveSpecialType((prev) => (prev === typeName ? null : typeName));
  };

  const selectedSpecialType = tsSpecialTypes.find(
    (t) => t.name === activeSpecialType,
  );

  const handleUtilityClick = (typeName: string) => {
    setActiveUtilityType((prev) => (prev === typeName ? null : typeName));
  };

  const selectedUtilityType = tsUtilityTypes.find(
    (t) => t.name === activeUtilityType,
  );
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <TaskTarget target={taskTarget1} taskNumber={3} />

      <div className="d-flex flex-column gap-3" style={{ width: 400 }}>
        {/* Специальные типы */}

        <div>
          <h3>Типы данных Javascript</h3>
          <ButtonGroup className="mb-3">
            {tsSpecialTypes.map((t) => (
              <Button
                key={t.name}
                variant={
                  activeSpecialType === t.name ? "primary" : "outline-primary"
                }
                onClick={() => handleSpecialClick(t.name)}
              >
                {t.name}
              </Button>
            ))}
          </ButtonGroup>

          {selectedSpecialType && (
            <Card>
              <Card.Body>
                <h5>{selectedSpecialType.name}</h5>
                <p>{selectedSpecialType.description}</p>
              </Card.Body>
            </Card>
          )}
          <ul className="d-flex flex-column">
            <li>Перечислите все примитивы</li>
            <li>Как работает псеводоистина на примитивах?</li>
            <li>В чем суть any?</li>
            <li>Разница между null и undefined</li>
            <li>Как определить является ли значение переменной Массивом?</li>
            <li>Какие методы Массивов вам известны? Для чего они нужны?</li>
            <li>Map и Set - Что это? Зачем используются?</li>
          </ul>
        </div>

        {/* Утилитные типы */}
        <div
          style={{
            display: "flex",
            gap: 20,
            margin: "auto",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div className="d-flex flex-column gap-3" style={{ width: "800px" }}>
            <h3>Утилитные типы TypeScript</h3>
            <ButtonGroup className="mb-3">
              {tsUtilityTypes.map((t) => (
                <Button
                  key={t.name}
                  variant={
                    activeUtilityType === t.name ? "primary" : "outline-primary"
                  }
                  onClick={() => handleUtilityClick(t.name)}
                >
                  {t.name}
                </Button>
              ))}
            </ButtonGroup>

            {selectedUtilityType && (
              <div className="d-flex gap-3">
                <Card>
                  <Card.Body>
                    <h5>{selectedUtilityType.name}</h5>
                    <p>{selectedUtilityType.description}</p>

                    <Form.Group controlId="utilityAnswer">
                      <Form.Label>Напишите пример</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={utilityAnswer}
                        onChange={(e) => setUtilityAnswer(e.target.value)}
                        placeholder=""
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
                <Card style={{ width: "400px" }}>
                  <Card.Body>{selectedUtilityType.example}</Card.Body>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
