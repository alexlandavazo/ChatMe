import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import InputMessage from "./components/InputMessage";
import MessageReceived from "./components/MessageReceived";
import MessageSent from "./components/MessageSent";
import ChatLayout from "./layouts/ChatLayout";

export default function App() {
  const [allChat, setAllChat] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);
    return (socket) => socket.close();
  }, [setSocket]);
  useEffect(() => {
    if (socket) {
      socket.on("msg:get", (data) => {
        setAllChat(data.msg);
      });
    }
  }, [socket]);

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <ChatLayout>
        <>
          <MessageReceived />
          {allChat.map((message) => (
            <MessageSent message={message} key={message.time} />
          ))}
          <InputMessage socket={socket} />
        </>
      </ChatLayout>
    </div>
  );
}
