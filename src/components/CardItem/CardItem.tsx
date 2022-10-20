import React, { FC,  useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash, Type } from "react-feather";

import { CardItemProps, TaskProps } from "./CardItem.types";
import CurrentInput from "../CurrentInput";
import { Styled } from "./CardItem.styled";

import { CardFormValuesProps } from "../CardForm/CardForm.types";
import { LabelValuesProps } from "../Label/Label.types";
import Modal from "../Modal/Modal";
import Label from "../Label/Label";
import { colorsList } from "../Utils";

const CardItem: FC<CardItemProps> = (props) => {
  const { onClose, card, } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<CardFormValuesProps>({
    ...card,
  });

  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  const updateDesc = (value: string) => {
    setCardValues({ ...cardValues, desc: value });
  };

  const updateComment = (value: string) => {
    setCardValues({ ...cardValues, comment: value });
  };

  const addLabel = (label: LabelValuesProps) => {
    const index = cardValues.labels.findIndex(
      (item: any) => item.text === label.text
    );
    if (index > -1) return; 

    setSelectedColor("");
    setCardValues({
      ...cardValues,
      labels: [...cardValues.labels, label],
    });
  };

  const removeLabel = (label: LabelValuesProps) => {
    const tempLabels = cardValues.labels.filter(
      (item: any) => item.text !== label.text
    );

    setCardValues({
      ...cardValues,
      labels: tempLabels,
    });
  };

  const addTask = (value: string) => {
    const task: TaskProps = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setCardValues({
      ...cardValues,
      tasks: [...cardValues.tasks, task],
    });
  };

  const removeTask = (id: number) => {
    const tasks = [...cardValues.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setCardValues({
      ...cardValues,
      tasks: tempTasks,
    });
  };

  const updateTask = (id: number, value: boolean) => {
    const tasks = [...cardValues.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = Boolean(value);

    setCardValues({
      ...cardValues,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!cardValues.tasks?.length) return 0;
    const completed = cardValues.tasks?.filter(
      (item: any) => item.completed
    )?.length;
    return (completed / cardValues.tasks?.length) * 100;
  };

  const updateDate = (date: string) => {
    if (!date) return;

    setCardValues({
      ...cardValues,
      date,
    });
  };

  const calculatedPercent = calculatePercent();

  return (
    <Styled>
      <Modal onClose={onClose}>
        <div className="cardinfo">
          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <Type />
              <p>Title</p>
            </div>
            <CurrentInput
              defaultValue={cardValues.title}
              text={cardValues.title}
              placeholder="Enter Title"
              onSubmit={updateTitle}
            />
          </div>

          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <List />
              <p>Description</p>
            </div>
            <CurrentInput
              defaultValue={cardValues.desc}
              text={cardValues.desc || "Add a Description"}
              placeholder="Enter description"
              onSubmit={updateDesc}
            />
          </div>

          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <Calendar />
              <p>Date</p>
            </div>
            <input
              type="date"
              defaultValue={cardValues.date}
              min={new Date().toISOString().substr(0, 10)}
              onChange={(event) => updateDate(event.target.value)}
            />
          </div>

          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <Tag />
              <p>Labels</p>
            </div>
            <div className="cardinfo-box-labels">
              {cardValues.labels?.map((item: any, index: any) => (
                <Label key={index} item={item} removeLabel={removeLabel} />
              ))}
            </div>
            <ul>
              {colorsList.map((item: any, index: any) => (
                <li
                  key={index}
                  style={{ backgroundColor: item }}
                  className={selectedColor === item ? "li-active" : ""}
                  onClick={() => setSelectedColor(item)}
                />
              ))}
            </ul>
            <CurrentInput
              text="Add Label"
              placeholder="Enter label text"
              onSubmit={(value: string) =>
                addLabel({ color: selectedColor, text: value })
              }
            />
          </div>

          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <CheckSquare />
              <p>Tasks</p>
            </div>
            <div className="cardinfo-box-progress-bar">
              <div
                className="cardinfo-box-progress"
                style={{
                  width: `${calculatedPercent}%`,
                  backgroundColor: calculatedPercent === 100 ? "limegreen" : "",
                }}
              />
            </div>
            <div className="cardinfo-box-task-list">
              {cardValues.tasks?.map((item: any) => (
                <div key={item.id} className="cardinfo-box-task-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={(event) =>
                      updateTask(item.id, event.target.checked)
                    }
                  />
                  <p className={item.completed ? "completed" : ""}>
                    {item.text}
                  </p>
                  <Trash onClick={() => removeTask(item.id)} />
                </div>
              ))}
            </div>
            <CurrentInput
              text={"Add a Task"}
              placeholder="Enter task"
              onSubmit={addTask}
            />
          </div>
          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <List />
              <p>Comments</p>
            </div>
            <CurrentInput
              defaultValue={cardValues.comment}
              text={cardValues.comment || "Add a Comment"}
              placeholder="Enter Comment"
              onSubmit={updateComment}
            />
          </div>
        </div>
      </Modal>
    </Styled>
  );
};

export default CardItem;
