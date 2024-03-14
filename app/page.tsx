"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setCount(count + 1)}
            className="inline-block px-4 py-2 text-white font-bold bg-blue-500 hover:bg-blue-700 transition-colors rounded"
          >
            Increment Counter
          </button>
          <div className="text-center">{count}</div>
        </div>
      </div>
    </>
  );
}
