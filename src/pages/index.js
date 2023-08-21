import { Inter } from 'next/font/google';
import Faqs from '@/components/faqs';
import TaskList from '@/components/tasks/TasksList';
import AddTask from '@/components/tasks/AddTask';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <Faqs /> */}
      <div className="flex flex-col space-y-6 justify-start items-center w-full">
        <AddTask />
        <TaskList />
      </div>
    </main>
  );
}
