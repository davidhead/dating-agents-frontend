import { useState } from "react";
import Image from "next/image";

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
            <div
              className="accordionTitle justify-between"
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center">
                <Image
                  className="ml-4 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={50}
                  height={50}
                />

                <span className="ml-2">
                  Conversation with {conversation.potential_match_name}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 mt-1 text-lg font-thin flex items-center">
                  Match Score: 80
                </span>
                <span className="mr-4 text-3xl font-thin flex items-center">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
            </div>
            {activeIndex === index && (
              <div className="accordionContent">
                {conversation.new_conversation.map((message, msgIndex) => (
                  <div className="flex items-center mb-2">
                    <Image
                      className="ml-4 h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      width={64}
                      height={64}
                    />
                    <p key={msgIndex} className="ml-2">
                      <strong>{message.user}:</strong> {message.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default ConversationAccordion;
