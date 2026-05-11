import { useEffect, useState } from "react";

function APIDemo() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const userList = await res.json();
        setUsers(userList);
      } catch (err) {
        console.log("Error is", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-blue-500 text-4xl mt-10">
        Loading...
      </div>
    );
  }

  if (error !== null) {
    return (
      <p className="text-center text-red-500 text-4xl mt-10">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">List of Comments</h1>
        <h2 className="text-2xl font-semibold mb-4">Count: {count}</h2>
        <button
          onClick={changeCount}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded"
        >
          Increase Count
        </button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.slice(0, 12).map((user) => (
          <div
            key={user.id}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {user.name}
            </h3>
            <p className="text-sm text-blue-600 mb-2">{user.email}</p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Comment ID:</span> {user.id}
            </p>
            <p className="text-gray-700">{user.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default APIDemo;
