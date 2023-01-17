import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Perform an API request to get the user information from the database
    // and update the state with the response
    const fetchUser = async () => {
        const response = await fetch('/api/user/profile');
        const data = await response.json();
        setUser(data);
    }
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default ProfilePage;
