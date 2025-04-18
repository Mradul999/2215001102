import React from "react";
import Home from "./pages/Home";
import { Routes, Route, NavLink } from "react-router-dom";
import Feed from "./pages/Feed";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";

const App = () => {
  return (
    <div className="text-red-200">
      <Home />
      <nav className="mb-4 flex gap-4">
        <NavLink to="feed" className="text-blue-500 hover:underline">
          Feed
        </NavLink>
        <NavLink to="top-users" className="text-blue-500 hover:underline">
          Top Users
        </NavLink>
        <NavLink to="trending-posts" className="text-blue-500 hover:underline">
          Trending Posts
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="feed" element={<Feed />} />
        <Route path="top-users" element={<TopUsers />} />
        <Route path="trending-posts" element={<TrendingPosts />} />
      </Routes>
    </div>
  );
};

export default App;
