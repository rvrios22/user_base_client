import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {users.map(user => (
        <div>
          <h1>{user.firstName} {user.lastName}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;
