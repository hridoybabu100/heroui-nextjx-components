import { Card } from "@heroui/react";
import Link from "next/link";


const TasksCard = ({task}) => {
      const { id, title, status } = task;
  return (
    <div>
      <Card className="">
        <Card.Header>
          <Card.Title>{title}!</Card.Title>
          <Card.Description>
            {status}
          </Card.Description>
        </Card.Header>
        <Card.Footer>
       
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TasksCard;
