"use client";
import { InviteFriends } from "@/app/utils/InviteFriends";
import { ChangeEvent, useState } from "react";

export default function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  const getName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getTelefone = (e: ChangeEvent<HTMLInputElement>) => {
    setTelefone(e.target.value);
  };

  const onSubmit = (event: Event) => {
    setName(""), setTelefone(""), setEmail(""), event.preventDefault();
  };
  return (
    <form className="form" onSubmit={() => onSubmit}>
      <div className="content">
        <br />
        <h2 className="h2Input">Convide um amigo!</h2>
        <p>e ganhe descontos exclusivos!</p>
        <input
          type="text"
          className="inputForm"
          maxLength={25}
          placeholder="Nome"
          value={name}
          onChange={getName}
        />
        <input
          type="text"
          className="inputForm"
          maxLength={25}
          placeholder="Telefone"
          value={telefone}
          onChange={getTelefone}
        />
        <input
          type="text"
          className="inputForm"
          maxLength={25}
          placeholder="Email"
          value={email}
          onChange={getEmail}
        />
        <div>
          <button
            className="buttonInput"
            onClick={() => InviteFriends(name, telefone, email)}
          >
            Convidar!
          </button>
        </div>
      </div>
    </form>
  );
}
