"use client"
import React, { useEffect, useState } from "react";
import { fetchUserData } from "../api/get-data";

export default function Home() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserData();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-5xl font-bold mb-10">
        Fetch Data From Firebase Firestore DB
      </h1>

      <div>
        {usersData.map((user) => (
          <div key={user.id} className="mb-4">
            <p className="text-xl font-bold">{user.name}</p>
            <p>{user.age}</p>
            <p>{user.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
