import { Card } from "react-bootstrap";
import { TaskTargetType } from "../common/types";

type Props = {
  target: TaskTargetType;
  taskNumber: number;
};

export const TaskTarget = ({ target, taskNumber }: Props) => {
  return (
    <Card style={{ margin: "20px", padding: "20px", width: 400 }}>
      <h2>Задание {taskNumber}</h2>
      <p>{target.description}</p>

      <h3>Что нужно сделать:</h3>
      <ul>
        {target.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </Card>
  );
};
