"use client";

import { useState, useCallback } from "react";
import ChatWindow, { Message } from "@/components/ChatWindow";
import ChatInput from "@/components/ChatInput";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = useCallback((content: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: `This is a demo reply to: "${content}"`,
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  }, []);

  return (
    <main className="flex h-screen flex-col">
      <header className="flex items-center justify-center border-b border-neutral-800 bg-neutral-950/80 px-4 py-3 backdrop-blur">
        <h1 className="text-base font-semibold tracking-tight">Ark</h1>
      </header>
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </main>
  );
}
