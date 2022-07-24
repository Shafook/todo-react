import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ThemeSelector from '../ThemeSelector';
import TodoItem from '../TodoItrem';
import {
  Wrapper,
  Header,
  Form,
  Input,
  Container,
  Footer,
  FilterText,
  FilterContainer,
} from './styles';
import CustomCheckbox from '../CustomCheckbox';

const TodoComponent = ({ setSelectedTheme }) => {
  const [inputValue, setInputValue] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [activeTasks, setActiveTasks] = useState(0);

  const filterTexts = ['All', 'Active', 'Completed'];

  useEffect(() => {
    switch (filter) {
      case 'All':
        setFilterItems(todoItems);
        break;

      case 'Active':
        setFilterItems(todoItems.filter((item) => item.completed === false));
        break;
      case 'Completed':
        setFilterItems(todoItems.filter((item) => item.completed === true));
        break;
      default:
        break;
    }

    const active = todoItems.reduce((acc, curr) => {
      if (curr.completed === false) {
        return acc + 1;
      }
      return acc;
    }, 0);

    setActiveTasks(active);
  }, [filter, todoItems]);

  const clearAll = () => {
    setTodoItems([]);
    setFilterItems([]);
  };

  const deleteItem = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };

  const changeComplete = (check, id) => {
    setTodoItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: check };
        }
        return item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var uniqid = require('uniqid');

    const item = {
      id: uniqid('item-'),
      text: inputValue,
      completed: false,
    };
    setTodoItems((prev) => [...prev, item]);

    setInputValue('');
  };

  const onDragEnd = (result) => {
    const { destination, source, reason } = result;
    if (!destination || reason === 'CANCEL') {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const items = [...todoItems];
    const droppedItem = todoItems[source.index];

    items.splice(source.index, 1);
    items.splice(destination.index, 0, droppedItem);

    setTodoItems(items);
  };

  const FilterTexts = ({ className }) => {
    return (
      <FilterContainer className={className}>
        {filterTexts.map((text, index) => {
          return (
            <FilterText
              key={index}
              filter={filter.localeCompare(text)}
              onClick={() => setFilter(text)}
            >
              {text}
            </FilterText>
          );
        })}
      </FilterContainer>
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Header>
          <h1>TODO</h1>
          <ThemeSelector setter={setSelectedTheme} />
        </Header>

        <Form onSubmit={handleSubmit}>
          <CustomCheckbox />
          <Input
            placeholder='Create TODO'
            value={inputValue}
            onChange={(v) => setInputValue(v.target.value)}
          />
        </Form>

        <Container>
          <Droppable droppableId='dp1'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {filterItems?.map(({ id, text, completed }, index) => {
                  return (
                    <TodoItem
                      key={id}
                      draggableId={id}
                      index={index}
                      id={id}
                      text={text}
                      completed={completed}
                      changeComplete={changeComplete}
                      deleteItem={deleteItem}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Footer>
            <span>{activeTasks} items left</span>
            <div>
              <FilterTexts className='hide-for-mobile' />
              <span onClick={clearAll}>Clear Completed</span>
            </div>
          </Footer>
        </Container>
        <FilterTexts className='hide-for-desktop' />
      </Wrapper>
    </DragDropContext>
  );
};

export default TodoComponent;
