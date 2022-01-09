import InputMessage from "./components/InputMessage";
import MessageReceived from "./components/MessageReceived";
import MessageSent from "./components/MessageSent";
import ChatLayout from "./layouts/ChatLayout";

export default function App() {
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <ChatLayout>
        <>
          <MessageReceived />
          <MessageSent />
          <InputMessage />
        </>
      </ChatLayout>
    </div>
  );
}
