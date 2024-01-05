import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);
  function handleChange(value) {
    setInputValue(value);
  }
  function handleAddTodo() {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { title: inputValue, isDone: false, id: Math.random() * 100 },
      ];
    });
    setInputValue('');
  }
  function handleKeyDown() {
    if (inputValue.length === 0) {
      return;
    }
    setTodos([
      ...todos,
      { title: inputValue, isDone: false, id: Math.random() * 100 },
    ]);
    setInputValue('');
  }

  function handleToggleDone(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEdit };
        }
        return { ...todo, isEdit: false };
      });
    });
  };

  const handleSave = ({ id, title }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title, isEdit: false };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      TodoPage
      <Header username />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onKeydown={handleKeyDown}
        onAddTodo={handleAddTodo}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChnageMode={handleChangeMode}
        onSave={handleSave}
      />
      <Footer />
    </div>
  );
};

export default TodoPage;
