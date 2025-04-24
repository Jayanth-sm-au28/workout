// "How do we run code when a component loads, updates, or unmounts?"

// import { useEffect, useState } from "react";

// In class components, we used lifecycle methods like:

// componentDidMount (when the component loads)
// componentDidUpdate (when the component updates)
// componentWillUnmount (when the component is removed)
// But in functional components, we don’t have lifecycle methods. That’s where useEffect comes in!

//  useEffect lets us run code when a component mounts, updates, or unmounts.
// It’s like saying: "Hey React, run this code when something changes!"

// When is useEffect NEEDED?
// useEffect is useful when you want to:
//  Run code when the component first loads (e.g., fetching data,API calls, subscriptions, timers, event listeners)
//  Run code when state changes (e.g., updating the document title)
//  Handle cleanup (e.g., removing event listeners, stopping timers)

import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  console.log("Component rendering...");

  useEffect(() => {
    async function fetchUsers() {
      console.log("Fetching API...");
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers(); // ✅ Call function inside `useEffect`
  }, []); // ✅ Runs only once when component mounts

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

