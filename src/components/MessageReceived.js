import React from "react";

const MessageReceived = () => {
  return (
    <>
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
              Hello!!! 👋
            </span>
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ryan_Reynolds_by_Gage_Skidmore_3.jpg/1024px-Ryan_Reynolds_by_Gage_Skidmore_3.jpg"
          alt="My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      </div>
    </>
  );
};

export default MessageReceived;
