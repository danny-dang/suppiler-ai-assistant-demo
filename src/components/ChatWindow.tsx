"use client";
import { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import ChatInput from "./ChatInput";
import ExampleQuery from "./ExampleQuery";
import Message from "./Message";
import { LiaRobotSolid } from "react-icons/lia";

const exampleQuestions = [
  "What are the top 3 suppliers?",
  "Find the suppliers in healthcare industry?",
];

export default function ChatPage() {
  const {
    messages,
    input,
    setInput,
    handleSubmit,
    status,
    error,
    setMessages,
    append,
  } = useChat({
    api: "/api/chat",
  });

  const hasMessages = messages.length > 0;
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesLength = messages.length;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messagesLength]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-medium text-white flex items-end gap-2 mb-4">
          <LiaRobotSolid size={25} />
          <div>Supplier AI Assistant</div>
        </h1>
        {hasMessages && (
          <button
            onClick={() => {
              setMessages([]);
              setInput("");
            }}
            type="button"
            className="text-white cursor-pointer border border-white py-1 px-2 rounded-md hover:border-zinc-300 transition duration-200"
          >
            Clear
          </button>
        )}
      </div>

      {hasMessages && (
        <div className="space-y-6 mb-8">
          {messages.map((m) => (
            <Message message={m} key={m.id} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}

      {status === "submitted" && (
        <div className="text-sm text-gray-500 animate-pulse mb-2">
          AI is thinking...
        </div>
      )}

      {error && (
        <div className="text-sm text-red-500 mb-2">Error: {error.message}</div>
      )}

      {!hasMessages && (
        <div className="flex flex-wrap gap-2 mb-4">
          {exampleQuestions.map((question, index) => (
            <ExampleQuery
              key={index}
              question={question}
              onClick={() => {
                append({
                  role: "user",
                  content: question,
                });
                handleSubmit();
              }}
            />
          ))}
        </div>
      )}

      <ChatInput
        value={input}
        onChange={setInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
