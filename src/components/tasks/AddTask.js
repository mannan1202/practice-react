import { add } from '@/store/todo/todoSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AddTask() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const onTodoChange = (e) => setTodo(e.target.value);

  const onSaveTodo = (e) => {
    if (todo && e.key === 'Enter') {
      dispatch(
        add({
          title: todo,
          completed: false,
        })
      );
      setTodo('');
    }
  };

  return (
    <section className="w-1/2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col space-y-2 justify-start">
          <label htmlFor="add-todo" className="self-start">
            Add Todo
          </label>
          <input
            type="text"
            name="add-todo"
            id="add-todo"
            placeholder="enter your task title"
            value={todo}
            onKeyDown={onSaveTodo}
            onChange={onTodoChange}
            className="rounded-lg p-2 bg-white text-black text-sm"
          />
        </div>
      </form>
    </section>
  );
}
