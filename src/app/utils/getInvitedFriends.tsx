"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const tata = () => {
  axios.get("http://localhost:8080/convidar").then((res: any) => {
    console.log(res.data, "oi");
  });
};
