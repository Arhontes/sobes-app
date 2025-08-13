import React, { useState } from "react";
import {
  Accordion,
  Button,
  ButtonGroup,
  Card,
  ListGroup,
} from "react-bootstrap";
import { TaskTarget } from "../../../common/TaskTarget";

const taskTarget1 = {
  description: "Знание хуков React и их использование",
  points: ["Расскрыть все аккордеоны по порядку и ответить на вопросы"],
};

const hooksQuestions = [
  {
    hook: "useState",
    questions: [
      "Для чего используется useState?",
      "Что будет, если в useState передать функцию?",
      "Чем отличается передача значения и функции в useState?",
      "Когда стоит использовать useReducer вместо useState?",
    ],
  },
  {
    hook: "useEffect",
    questions: [
      "Что будет, если не передать второй аргумент?",
      "Как избежать бесконечного цикла при использовании useEffect?",
      "Зачем и как использовать функцию очистки (cleanup)?",
    ],
  },
  {
    hook: "useMemo",
    questions: [
      "Для чего используется useMemo?",
      "Чем useMemo отличается от React.memo?",
      "Когда useMemo может быть бесполезен или вреден?",
    ],
  },
  {
    hook: "useCallback",
    questions: [
      "Для чего нужен useCallback?",
      "Чем он отличается от useMemo?",
      "Когда стоит использовать useCallback?",
    ],
  },
  {
    hook: "useRef",
    questions: [
      "Для чего используется useRef?",
      "Почему изменения в useRef не вызывают ререндер?",
    ],
  },
  {
    hook: "Кастомные хуки",
    questions: [
      "Что такое кастомный хук?",
      "Зачем выносить логику в кастомный хук?",
      "Расскажи про хук useDebounce, useTrottle. В чем между ними разница.",
    ],
  },
];
export const Theory2 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <TaskTarget target={taskTarget1} taskNumber={2} />

      <div style={{ width: 400 }}>
        <h3>React Hooks</h3>
        <Accordion alwaysOpen>
          {hooksQuestions.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={item.hook}>
              <Accordion.Header>{item.hook}</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  {item.questions.map((q, idx) => (
                    <ListGroup.Item key={idx}>{q}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
