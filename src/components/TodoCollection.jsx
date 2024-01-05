import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggleDone,
  onChnageMode,
}) => {
  return (
    <div>
      TodoCollection
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onChnageMode={onChnageMode}
          onSave={onSave}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoCollection;
