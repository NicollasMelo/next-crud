"use client";
import ResponsiveAppBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import axios from "axios";
import { useEffect, useState } from "react";

type body = {
  id: number;
  name: string;
  telefone: string;
  email: string;
};

export default function Friends() {
  const [data, setData] = useState<body[]>([]);
  useEffect(() => {
    const GetInvitedFriends = () => {
      axios.get("http://localhost:8080/convidar").then((res) => {
        setData(res.data);
      });
    };
    GetInvitedFriends();
  }, []);
  return (
    <main className="principal">
      <ResponsiveAppBar />
      <h1
        style={{
          textAlign: "center",
          padding: "3rem",
          fontWeight: "700",
          fontSize: "3.5rem",
        }}
      >
        Amigos convidados!
      </h1>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                padding: "5px",
                margin: "5px",
                width: "20%",
              }}
            >
              <p>Nome: {item.name}</p>
              <p>Telefone: {item.telefone}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="involvedFooter">
        <Footer />
      </div>
    </main>
  );
}
