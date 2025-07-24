"use client";

import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/generate", { input });
      console.log(data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="flex flex-col gap-6 justify-center items-center p-6 rounded-lg">
        <div className="text-white text-3xl mb-4 w-[20rem] text-center">
          Create engaging post
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center w-[50rem] h-14 space-x-2 bg-[#404045] py-2 px-4 rounded">
            <input
              type="text"
              placeholder="generate post"
              className="px-2 focus:outline-none w-[95%] bg-transparent text-white"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit" disabled={!input.trim()}>
              <img
                src="/up.svg"
                alt="generate"
                className="h-5 w-5 cursor-pointer"
              />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
