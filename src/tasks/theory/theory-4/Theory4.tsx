import { useState } from "react";
import { TaskTarget } from "../../../common/TaskTarget";
import { Card, ListGroup } from "react-bootstrap";

const taskTarget1 = {
  description: "Проверка знаний по верстке и CSS",
  points: [
    "Ответьте на вопросы по HTML и CSS",
    "Обсудите практические кейсы верстки макетов и адаптивности",
  ],
};

const layoutQuestions = [
  {
    question: "Назовите основные семантические теги HTML5 и их назначение.",
    answer: (
      <div>
        <p>
          Примеры семантических тегов: <code>&lt;header&gt;</code>,{" "}
          <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>,{" "}
          <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>. Они
          помогают структурировать контент и улучшают доступность.
        </p>
      </div>
    ),
  },
  {
    question: "Чем отличается <div> от <section> или <article>?",
    answer: (
      <div>
        <p>
          <code>&lt;div&gt;</code> — универсальный контейнер без семантики,
          <code>&lt;section&gt;</code> — тематическая секция страницы,
          <code>&lt;article&gt;</code> — самостоятельный фрагмент контента.
        </p>
      </div>
    ),
  },
  {
    question:
      "Как центрировать блок горизонтально и вертикально с помощью Flexbox?",
    answer: (
      <div>
        <pre>{`display: flex;
justify-content: center;
align-items: center;`}</pre>
      </div>
    ),
  },
  {
    question: "Разница между position: relative, absolute, fixed и sticky?",
    answer: (
      <div>
        <p>
          <code>relative</code> — смещение относительно нормального положения,{" "}
          <code>absolute</code> — позиционирование относительно ближайшего
          позиционированного родителя, <code>fixed</code> — фиксированное
          положение относительно окна, <code>sticky</code> — переключение между
          relative и fixed в зависимости от прокрутки.
        </p>
      </div>
    ),
  },
  {
    question: "Какие единицы измерения есть в CSS и когда их использовать?",
    answer: (
      <div>
        <p>
          Основные единицы: <code>px</code> (пиксели), <code>em</code> и{" "}
          <code>rem</code> (относительно шрифта), <code>%</code> (проценты),{" "}
          <code>vw</code> / <code>vh</code> (вьюпорт), <code>ch</code> и{" "}
          <code>ex</code> для текста. Используются в зависимости от того, нужно
          ли фиксированное или гибкое масштабирование.
        </p>
      </div>
    ),
  },
  {
    question: "Разница между inline, block и inline-block элементами.",
    answer: (
      <div>
        <p>
          <code>block</code> — занимает всю ширину, переносит строки,{" "}
          <code>inline</code> — занимает только ширину контента, не переносит
          строки, <code>inline-block</code> — сочетает свойства inline и block.
        </p>
      </div>
    ),
  },
  {
    question: "Что такое z-index и как работает контекст наложения?",
    answer: (
      <div>
        <p>
          <code>z-index</code> определяет порядок наложения элементов на одной
          плоскости. Контекст наложения создается элементами с позиционированием
          отличным от static и свойством z-index.
        </p>
      </div>
    ),
  },
  {
    question: "Как работают псевдоклассы :hover, :focus и :active?",
    answer: (
      <div>
        <p>
          <code>:hover</code> — когда курсор над элементом, <code>:focus</code>{" "}
          — когда элемент в фокусе (например, input), <code>:active</code> —
          когда элемент активно нажимается.
        </p>
      </div>
    ),
  },
  {
    question:
      "Что такое миксины (mixins) и как их использовать для повторного кода?",
    answer: (
      <div>
        <p>
          <code>@mixin</code> в SCSS позволяет создавать повторяемый блок стилей
          и вставлять его с помощью <code>@include</code>. Это уменьшает
          дублирование кода.
        </p>
      </div>
    ),
  },
  {
    question: "Как SCSS помогает уменьшить дублирование кода?",
    answer: (
      <div>
        <p>
          SCSS позволяет использовать переменные, вложенность, миксины, функции
          и наследование. Это сокращает повторяющийся CSS и делает код более
          читаемым.
        </p>
      </div>
    ),
  },
];

export const Theory4 = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <TaskTarget target={taskTarget1} taskNumber={4} />

      <div className="d-flex gap-3" style={{ width: "100%" }}>
        {/* Список вопросов */}
        <div style={{ width: 400 }}>
          <h3>Вопросы по верстке и CSS</h3>
          <ListGroup>
            {layoutQuestions.map((q, idx) => (
              <ListGroup.Item
                key={idx}
                action
                active={activeQuestion === idx}
                onClick={() => setActiveQuestion(idx)}
              >
                <Card>
                  <Card.Body>
                    <strong>{idx + 1}. Вопрос:</strong> {q.question}
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        {/* Блок ответа */}
        <div style={{ width: 400, marginTop: "42px" }}>
          <div style={{ position: "sticky", top: 20 }}>
            {activeQuestion !== null && (
              <Card>
                <Card.Body>
                  <h5>Ответ:</h5>
                  {layoutQuestions[activeQuestion].answer}
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
