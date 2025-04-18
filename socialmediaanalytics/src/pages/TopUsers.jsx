import React, { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      try {
        const response = await axios.get(
          "http://20.244.56.144/evaluation-service/users",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU4MzI2LCJpYXQiOjE3NDQ5NTgwMjYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE3YjEyOGU2LTRlNTMtNGI1NC1hMTM0LTc5MmJjNzkwNzkxNyIsInN1YiI6Im1yYWR1bC52ZXJtYV9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6Im1yYWR1bC52ZXJtYV9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJtcmFkdWwgdmVybWEiLCJyb2xsTm8iOiIyMjE1MDAxMTAyIiwiYWNjZXNzQ29kZSI6IkNObmVHVCIsImNsaWVudElEIjoiMTdiMTI4ZTYtNGU1My00YjU0LWExMzQtNzkyYmM3OTA3OTE3IiwiY2xpZW50U2VjcmV0IjoicG1zZkFzS2FzY1dwV3ViWiJ9.B24fMNDbJHUzmqE6u2Eau5Bog--ASQot6ZekDZ2xi8o`,
            },
          }
        );

        const usersObj = response.data.users;

        const usersArray = Object.entries(usersObj).map(([id, name]) => ({
          id,
          name,
        }));

        setTopUsers(usersArray);
      } catch (error) {
        console.error("Error fetching top users:", error);
      }
    };

    getTopUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Top Users Page</h1>
      <div className="space-y-4">
        {topUsers.map((user, index) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold">{user.name}</h2>
            </div>
            <span className="text-indigo-600 text-xl font-semibold">
              #{index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
