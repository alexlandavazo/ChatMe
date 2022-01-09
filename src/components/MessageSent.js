import React from "react";

const MessageSent = () => {
  return (
    <>
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
              Hellow
            </span>
          </div>
        </div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQEf3IZWjrycqA/profile-displayphoto-shrink_400_400/0/1602787219542?e=1647475200&v=beta&t=rpP6xZbTaj-sC7YzUxaM_X7xAY3Phi_uqDkLpAcNzTU"
          alt="My profile"
          className="w-6 h-6 rounded-full order-2"
        />
      </div>
    </>
  );
};
export default MessageSent;
