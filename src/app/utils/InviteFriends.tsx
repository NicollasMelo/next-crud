import axios from "axios";

export const InviteFriends = (
  name: string,
  telefone: string,
  email: string
) => {
  axios
    .post("http://localhost:8080/convidar", { name, telefone, email })
    .then((res) => {});
};
