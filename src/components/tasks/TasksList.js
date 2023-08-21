import {
  completed,
  notCompleted,
  remove,
} from '@/store/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function TaskList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleOnComplete = (e, index) => {
    e.preventDefault();
    console.log(index);
    dispatch(completed(index));
  };

  const handleOnRemove = (e, index) => {
    e.preventDefault();
    dispatch(remove(index));
  };

  const handleOnNotComplete = (e, index) => {
    e.preventDefault();
    dispatch(notCompleted(index));
  };

  const renderedTodos = (
    <div className="py-2">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="my-2">
            <div className="flex justify-between">
              <span className={todo.completed ? 'line-through' : ''}>
                {todo.title}
              </span>
              <div className="flex space-x-3 text-sm">
                {todo.completed ? (
                  <button
                    type="button"
                    onClick={(e) => handleOnNotComplete(e, index)}
                    className="p-2 bg-green-500 rounded-lg"
                  >
                    Not Completed
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => handleOnComplete(e, index)}
                    className="p-2 bg-green-500 rounded-lg"
                  >
                    Complete
                  </button>
                )}

                <button
                  type="button"
                  onClick={(e) => handleOnRemove(e, index)}
                  className="p-2 bg-red-500 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="w-1/2">
      <h2 className="text-3xl py-2">Tasks</h2>
      <hr />
      {renderedTodos}
    </section>
  );
}
