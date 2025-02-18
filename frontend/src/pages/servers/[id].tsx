import { ServerAllData } from "@site/src/types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServerDetails() {
  const { id } = useParams<{ id: string }>();
  const [server, setServer] = useState<ServerAllData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServerData() {
      try {
        const response = await fetch(`https://api.open.mp/servers/${id}`);
        if (!response.ok) throw new Error("Server not found");
        const data: ServerAllData = await response.json();
        setServer(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchServerData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!server) return <p>Server not found.</p>;

  return (
    <div>
      <h1>{server.core.hn}</h1>
      <p>{server.core.gm}</p>
    </div>
  );
}
