import React, { useState } from "react";
import { TaskTarget } from "../../common/TaskTarget";
import { taskTarget2 } from "./taskTarget2";
import { Badge, Button, Card, Modal } from "react-bootstrap";
import s from "./Task2.module.scss";

export const Task2 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const items = Array.from({ length: 20 }, (_, i) => ` item ${i + 1} `);

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <TaskTarget target={taskTarget2} taskNumber={2} />

      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 400,
          height: 400,
          margin: "20px",
          padding: "20px",
        }}
      >
        <div>
          <Button onClick={() => setModalOpen(true)}>
            Открыть модальное окно
          </Button>
          <Modal
            fullscreen
            show={modalOpen}
            onHide={() => setModalOpen(false)}
            dialogClassName={s.contentClassName}
            contentClassName={s.contentClassName}
          >
            <Modal.Header closeButton>
              <Modal.Title>Адаптивная верстка</Modal.Title>
            </Modal.Header>
            <Modal.Body className={s.modalBody}>
              <div className={s.adaptiveItemsList}>
                {items.map((el) => (
                  <div className={s.adaptiveItem} key={el}>
                    {el}
                  </div>
                ))}
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </Card>
    </div>
  );
};
