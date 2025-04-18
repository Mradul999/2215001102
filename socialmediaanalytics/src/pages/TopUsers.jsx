import React, { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);
  console.log(topUsers);
  useEffect(() => {
    const getTopUsers = async () => {
      try {
        const response = await axios.get(
          "http://20.244.56.144/evaluation-service/users",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU2OTI2LCJpYXQiOjE3NDQ5NTY2MjYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE3YjEyOGU2LTRlNTMtNGI1NC1hMTM0LTc5MmJjNzkwNzkxNyIsInN1YiI6Im1yYWR1bC52ZXJtYV9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6Im1yYWR1bC52ZXJtYV9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJtcmFkdWwgdmVybWEiLCJyb2xsTm8iOiIyMjE1MDAxMTAyIiwiYWNjZXNzQ29kZSI6IkNObmVHVCIsImNsaWVudElEIjoiMTdiMTI4ZTYtNGU1My00YjU0LWExMzQtNzkyYmM3OTA3OTE3IiwiY2xpZW50U2VjcmV0IjoicG1zZkFzS2FzY1dwV3ViWiJ9.YWRWdlDjrPByoOcEOBblfF-WSY8VCncArVIFNnwKrKs`,
            },
          }
        );
        setTopUsers(response.data.users);
        // console.log("Top Users:", response.data.users);
      } catch (error) {
        console.error("Error fetching top users:", error);
      }
    };

    getTopUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Top Users Page</h1>
      <div></div>
    </div>
  );
};

export default TopUsers;
