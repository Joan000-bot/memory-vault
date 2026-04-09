"use client";

import { useEffect, useRef } from "react";

export interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      {messages.length === 0 && (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-3 text-4xl">🌙</div>
          <h2 className="text-lg font-semibold text-neutral-300">Ark</h2>
          <p className="mt-1 text-sm text-neutral-500">
            Send a message to start chatting
          </p>
        </div>
      )}

      <div className="mx-auto max-w-2xl space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[70%] ${
                msg.role === "user"
                  ? "rounded-br-md bg-emerald-600 text-white"
                  : "rounded-bl-md border border-neutral-800 bg-neutral-900 text-neutral-200"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
