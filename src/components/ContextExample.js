import { MyContext } from '@/contexts/MyContext';
import { useContext } from 'react';

export default function ContextExample() {
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>
        Click me
      </button>
    </div>
  );
}
