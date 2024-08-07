import { reactive } from "vue";
import { io } from "socket.io-client";



const URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
console.log(URL);

export const socket = io(URL);

socket.on("connection", () => {
  console.log("connected");
});

socket.on("disconnect", () => {
  console.log("disconnected");
});
