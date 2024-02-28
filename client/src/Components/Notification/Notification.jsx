import React from "react";
import ReactDOM from "react-dom";

const NotificationModal = ({text}) => {
  return (
    <div className="w-fit absolute flex flex-col bg-[aliceblue] overflow-hidden text-black animate-[slideIn_1s_ease-in_forwards] rounded-lg top-24 right-0">
      <p className="text-[0.9rem] px-8 py-2">{text}</p>
      <div className="w-full h-[0.2rem] flex">
        <div className="h-full animate-[timerfn_6s_ease-in_2s_forwards] p-0 bg-purple-600"></div>
      </div>
    </div>
  );
};

const Notification = ({text}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <NotificationModal text={text} />,
        document.getElementById("message")
      )}
    </div>
  );
};

export default Notification;
