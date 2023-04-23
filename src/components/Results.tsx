import React, { useState } from "react";

const ConversationAccordion = () =>
  // { conversations }
  {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
    };

    const conversations = {
      result: [
        {
          conversation_id: 0,
          new_conversation: [
            {
              message: "Yo, what's up?",
              message_index: 0,
              user: "Alice",
            },
            {
              message:
                "Hi there, I'm Alice! I'm doing great today, how about you?",
              message_index: 1,
              user: "Bob",
            },
            {
              message:
                "Hey there, Alice! I'm doing fantastic today, thank you for asking. What brings you here today?",
              message_index: 2,
              user: "Alice",
            },
          ],
          potential_match_name: "Bob",
          protagonist_name: "Alice",
          score: 8.0,
        },
        {
          conversation_id: 0,
          new_conversation: [
            {
              message: "Yo, what's up?",
              message_index: 0,
              user: "Alice",
            },
            {
              message:
                "Hi there, I'm Alice! I'm doing great today, how about you?",
              message_index: 1,
              user: "Bob",
            },
            {
              message:
                "Hey there, Alice! I'm doing fantastic today, thank you for asking. What brings you here today?",
              message_index: 2,
              user: "Alice",
            },
          ],
          potential_match_name: "Dan",
          protagonist_name: "Alice",
          score: 8.0,
        },
      ],
    };

    return (
      <div className="accordion">
        {conversations.result.map((conversation, index) => (
          <div key={index} className="accordionItem">
            <div className="accordionTitle" onClick={() => handleClick(index)}>
              <span>
                Conversation between {conversation.protagonist_name} and{" "}
                {conversation.potential_match_name}
              </span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="accordionContent">
                {conversation.new_conversation.map((message, msgIndex) => (
                  <p key={msgIndex}>
                    <strong>{message.user}:</strong> {message.message}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default ConversationAccordion;
