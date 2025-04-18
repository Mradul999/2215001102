import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const TrendingPosts = () => {
  const [topPosts, setTopPosts] = useState([]);
  console.log(topPosts);
  useEffect(() => {
    const getTopPosts = async () => {
      try {
        const response = await axios.get(
          "http://20.244.56.144/evaluation-service/users/1/posts",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3NTM1LCJpYXQiOjE3NDQ5NTcyMzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE3YjEyOGU2LTRlNTMtNGI1NC1hMTM0LTc5MmJjNzkwNzkxNyIsInN1YiI6Im1yYWR1bC52ZXJtYV9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6Im1yYWR1bC52ZXJtYV9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJtcmFkdWwgdmVybWEiLCJyb2xsTm8iOiIyMjE1MDAxMTAyIiwiYWNjZXNzQ29kZSI6IkNObmVHVCIsImNsaWVudElEIjoiMTdiMTI4ZTYtNGU1My00YjU0LWExMzQtNzkyYmM3OTA3OTE3IiwiY2xpZW50U2VjcmV0IjoicG1zZkFzS2FzY1dwV3ViWiJ9.eVeVs90qGAsR8EsBPMbXEdZRFL-oBWp3xdRry5cB0XQ`,
            },
          }
        );
        setTopPosts(response.data.posts);
        // console.log("Top Users:", response.data.posts);
      } catch (error) {
        console.error("Error fetching top posts:", error);
      }
    };

    getTopPosts();
  }, []);

  return <div></div>;
};

export default TrendingPosts;
