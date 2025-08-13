import React, { useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { TaskTarget } from "../../../common/TaskTarget";

const fsdLayers = [
  { name: "app", desc: "Конфигурация приложения, провайдеры, маршрутизация" },
  {
    name: "pages",
    desc: "Страницы — сборка фич и виджетов под конкретный роут",
  },
  { name: "widgets", desc: "Крупные UI-блоки (шапка, меню, футер)" },
  {
    name: "features",
    desc: "Функциональные возможности (логин, поиск, корзина)",
  },
  { name: "entities", desc: "Бизнес-сущности (User, Product, Order)" },
  { name: "shared", desc: "Переиспользуемые утилиты, компоненты, API" },
];
// Сегменты для entities
const entitySegments = [
  {
    name: "ui",
    desc: "UI-компоненты, связанные с сущностью (таблицы, карточки, формы).",
  },
  {
    name: "lib",
    desc: "Логика и хелперы, относящиеся к сущности (форматирование, вычисления).",
  },
  { name: "api", desc: "Запросы и клиенты API для работы с сущностью." },
  {
    name: "config",
    desc: "Константы, настройки, конфигурация, относящиеся к сущности.",
  },
];
const taskTarget1 = {
  description: "Проверка знаний по современным архитектурным решениям",
  points: [
    "Расскажи про то какие архитектуры современных Web SPA приложений ты знаешь",
    "Расскажи про плюсы и минусы FSD архитектуры",
    "Вкратце расскажи про каждый слой и что в нем может находиться",
    "Расскрой слой Entities и расскажи про сегменты",
  ],
};
export const Theory1 = () => {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const handleLayerClick = (layer: string) => {
    if (selectedLayer === layer) {
      setSelectedLayer(null); // снять выделение
    } else {
      setSelectedLayer(layer);
      setSelectedSegment(null); // сброс сегмента при смене слоя
    }
  };

  const handleSegmentClick = (segment: string) => {
    if (selectedSegment === segment) {
      setSelectedSegment(null); // снять выделение
    } else {
      setSelectedSegment(segment);
    }
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
        <h3>Feature Sliced Design — Слои</h3>

        {/* Кнопки слоёв */}
        <ButtonGroup vertical className="mb-3">
          {fsdLayers.map((layer) => (
            <Button
              key={layer.name}
              variant={
                selectedLayer === layer.name ? "primary" : "outline-primary"
              }
              style={{ textAlign: "left" }}
              onClick={() => handleLayerClick(layer.name)}
            >
              {layer.name}
            </Button>
          ))}
        </ButtonGroup>

        {/* Карточка описания слоя */}
        {selectedLayer && (
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{selectedLayer}</Card.Title>
              <Card.Text>
                {fsdLayers.find((l) => l.name === selectedLayer)?.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        )}

        {/* Если выбрали entities — показываем сегменты */}
        {selectedLayer === "entities" && (
          <>
            <h4>Сегменты</h4>
            <ButtonGroup vertical className="mb-3">
              {entitySegments.map((seg) => (
                <Button
                  key={seg.name}
                  variant={
                    selectedSegment === seg.name ? "success" : "outline-success"
                  }
                  style={{ textAlign: "left" }}
                  onClick={() => handleSegmentClick(seg.name)}
                >
                  {seg.name}
                </Button>
              ))}
            </ButtonGroup>

            {/* Карточка описания сегмента */}
            {selectedSegment && (
              <Card>
                <Card.Body>
                  <Card.Title>{selectedSegment}</Card.Title>
                  <Card.Text>
                    {
                      entitySegments.find((s) => s.name === selectedSegment)
                        ?.desc
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
};
