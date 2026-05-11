import { useState } from "react";

function TestRefTypes() {
  const [user, setUser] = useState({
    username: "ravi",
    age: 21,
    city: "hyd"
  });

  const [marks, setMarks] = useState([10, 20, 30]);

  const updateUser = () => {
    setUser({ ...user, username: "bhanu", age: 23 });
  };

  const updateMarks = () => {
    setMarks([...marks, 40]);
  };

  return (
    <div>
      <h2>User Info</h2>
      <p className="text-3xl">Name: {user.username}</p>
      <p className="text-3xl">Age: {user.age}</p>
      <p className="text-3xl">City: {user.city}</p>

      <button onClick={updateUser}>Update User</button>

      <h2>Marks</h2>

      {marks.map((mark, index) => (
        <p className="text-3xl" key={index}>
          {mark}
        </p>
      ))}

      <button onClick={updateMarks}>Add Mark</button>
    </div>
  );
}

export default TestRefTypes;