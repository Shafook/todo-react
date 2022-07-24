import React, { useEffect, useState } from 'react';
import CustomCheckbox from '../CustomCheckbox';
import { AiOutlineClose } from 'react-icons/ai';
import { DeleteIcon, Item, Text } from './styles';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({
  className,
  id,
  text,
  completed,
  changeComplete,
  deleteItem,
  index,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  const handleCheckBoxChange = (check) => {
    setChecked(check);
    changeComplete(check, id);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={className}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Item>
            <div>
              <CustomCheckbox
                checked={checked}
                onChange={(e) => handleCheckBoxChange(e.target.checked)}
              />
              <Text
                checked={checked}
                onClick={() => handleCheckBoxChange(!checked)}
              >
                {text}
              </Text>
            </div>
            <DeleteIcon>
              <AiOutlineClose size={20} onClick={() => deleteItem(id)} />
            </DeleteIcon>
          </Item>
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
