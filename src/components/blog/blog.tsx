import { Button } from "@mui/material";

export default function Form() {
  return (
    <div className="form">
      <div className="content">
        <br />
        <h2 className="h2Input">Convide um amigo!</h2>
        <p>e ganhe descontos exclusivos!</p>
        <input
          type="text"
          className="inputForm"
          maxLength={25}
          placeholder="Nome"
        />
        <input
          type="text"
          className="inputForm"
          maxLength={25}
          placeholder="Telefone"
        />
        <input
          type="text"
          className="inputForm"
          maxLength={25}
          placeholder="Email"
        />
        <div>
          <button className="buttonInput"> Convidar!</button>
        </div>
      </div>
    </div>
  );
}
