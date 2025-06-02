import Header from '../components/Header';
export default function Profile() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">User Profile</h2>
        <p>This is a sample profile page.</p>
      </div>
    </div>
  );
}
