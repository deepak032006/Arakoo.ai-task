import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome to Task Board</h1>
      <Link to="/board" className="bg-blue-600 text-white px-4 py-2 rounded">Go to Board</Link>
    </div>
  );
}
