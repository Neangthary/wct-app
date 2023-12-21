"use client"
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";

const Test = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "event_detail", "Zf9PDqE7Bw59Z5WF8mT5");
        const snapshot = await getDoc(docRef);
        setData(snapshot.data());
        console.log(snapshot.data())
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Test;
