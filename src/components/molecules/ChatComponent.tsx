"use client";

import React, { useEffect, useState } from "react";

interface Message {
  content: string;
  id: string;
  volunteer_id: number;
}

const ws = new WebSocket(`ws://localhost:3001/chat`);

const ChatComponent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [guid, setGuid] = useState("");
  const [volunteerId, setVolunteerId] = useState(1); // Defina o volunteer_id conforme necessário

  useEffect(() => {
    const initializeWebSocket = () => {
      ws.onopen = () => {
        console.log("Connected to websocket server");

        const newGuid = Math.random().toString(36).substring(2, 15);
        setGuid(newGuid);

        // Agora enviando a assinatura após setar o guid
        ws.send(
          JSON.stringify({
            command: "message",
            identifier: JSON.stringify({
              id: guid, // Certifique-se de que o guid está correto
              channel: "ChatChannel", // Nome do canal correto
            }),
          })
        );

        ws.send(
          JSON.stringify({
            command: "send_message",
            identifier: JSON.stringify({
              id: guid,
              channel: "ChatChannel",
              data: JSON.stringify({
                action: "send_message", // Ação correta
                chat_id: "bfc7c472-f59c-427e-b656-65904e89c513", // ID do chat correto
                volunteer_id: "490493ed-ce8b-4d0e-a936-f3de6ba5e513", // volunteer_id correto
                content: "Hello, World!", // Conteúdo da mensagem
              }),
            }),
          })
        );
      };

      ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        if (["ping", "welcome", "confirm_subscription"].includes(data.type))
          return;

        const message = data.message;
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };
    };

    if (!guid) {
      initializeWebSocket();
    }

    return () => {
      ws.close();
    };
  }, [guid]);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    resetScroll();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = (e.target as HTMLFormElement).message.value;
    (e.target as HTMLFormElement).message.value = "";

    ws.send(
      JSON.stringify({
        command: "message",
        identifier: JSON.stringify({
          id: guid,
          channel: "MessagesChannel",
        }),
        data: JSON.stringify({
          action: "send_message",
          chat_id: "bfc7c472-f59c-427e-b656-65904e89c513", // ID do chat
          volunteer_id: "490493ed-ce8b-4d0e-a936-f3de6ba5e513",
          content: body,
        }),
      })
    );
  };

  const fetchMessages = async () => {
    const response = await fetch("http://localhost:3001/api/v1/messages");
    const data = await response.json();
    setMessagesAndScrollDown(data.data.data);
  };

  const setMessagesAndScrollDown = (prevMessages: Message[]) => {
    setMessages(prevMessages);
    resetScroll();
  };

  const resetScroll = () => {
    const messagesContainer = document.getElementById("messages");
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  };

  console.log(ws);

  return (
    <div className='App'>
      <div className='messageHeader'>
        <h1>Messages</h1>
        <p>Guid: {guid}</p>
      </div>
      <div className='messages' id='messages'>
        {messages.map(({ content, id }) => (
          <div className='message text-red-500' key={id}>
            <p>{content}</p>
          </div>
        ))}
      </div>
      <div className='messageForm'>
        <form onSubmit={handleSubmit}>
          <input className='messageInput' type='text' name='message' />
          <button className='messageButton' type='submit'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
