import Markdown from "react-markdown";
import { UIMessage } from "ai";
import { LiaRobotSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

const ThreeDots = () => {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 200);
    return () => clearInterval(interval);
  }, []);
  return <span>{dots}</span>;
};

const Message = ({ message }: { message: UIMessage }) => {
  if (message.role === "user") {
    return (
      <div className="ml-auto py-2 px-4 rounded-[25px] bg-zinc-700 w-fit text-white max-w-[70%]">
        <Markdown>{message.content}</Markdown>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 flex items-center gap-1 text-sm text-zinc-300">
        <LiaRobotSolid size={30} />:
      </div>
      <div className="p-4 text-white border border-zinc-500 rounded-lg">
        {message.content ? (
          <Markdown>{message.content}</Markdown>
        ) : (
          <ThreeDots />
        )}
      </div>
    </div>
  );
};

export default Message;
