import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import TaskCard from '../components/TaskCard';
import Header from '../components/Header';

export default function Board() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(data);
  };

  const addTask = async () => {
    if (!title) return;
    await addDoc(collection(db, 'tasks'), {
      title,
      status: 'Todo',
      createdAt: new Date()
    });
    setTitle('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl mb-2 font-semibold">Task Board</h2>
        <div className="flex gap-2 mb-4">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" className="border px-2 py-1 rounded" />
          <button onClick={addTask} className="bg-green-500 text-white px-3 py-1 rounded">Add</button>
        </div>
        <div className="grid gap-3">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} onDelete={() => deleteTask(task.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
