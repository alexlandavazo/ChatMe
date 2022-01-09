import React from "react";

const ChatLayout = ({ children }) => {
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="flex items-center space-x-4">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQEf3IZWjrycqA/profile-displayphoto-shrink_400_400/0/1602787219542?e=1647475200&v=beta&t=rpP6xZbTaj-sC7YzUxaM_X7xAY3Phi_uqDkLpAcNzTU"
            alt=""
            className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">Alejandro Landavazo</span>
              <span className="text-green-500">
                <svg width="10" height="10">
                  <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                </svg>
              </span>
            </div>
            <span className="text-lg text-gray-600">Software Engineer</span>
          </div>
        </div>
      </div>
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {children}
      </div>
    </div>
  );
};
export default ChatLayout;
