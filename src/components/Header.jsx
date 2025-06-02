import { useEffect, useState } from 'react';

export default function Header() {
  const [pic, setPic] = useState('');

  useEffect(() => {
    const id = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/id/${id}/info`)
      .then(res => res.json())
      .then(data => setPic(data.download_url));
  }, []);

  return (
    <div className="p-4 bg-gray-100 flex justify-end">
      {pic && <img src={pic} alt="profile" className="w-10 h-10 rounded-full" />}
    </div>
  );
}
