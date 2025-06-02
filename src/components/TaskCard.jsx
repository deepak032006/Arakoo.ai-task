export default function TaskCard({ task, onDelete }) {
  return (
    <div className="p-4 border rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.status}</p>
      </div>
      <button onClick={onDelete} className="text-red-500">Delete</button>
    </div>
  );
}
