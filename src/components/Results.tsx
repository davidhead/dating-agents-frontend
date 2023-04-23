import { useState } from "react";
import Image from "next/image";

interface ConversationAccordionProps {
  conversations: any;
}

const ConversationAccordion = ({
  conversations,
}: ConversationAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const getImageUrl = (name: string) => {
    switch (name.toLowerCase()) {
      case "bob":
        return "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
      case "charlie":
        return "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
      case "alice":
        return "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
      default:
        return "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    }
  };

  console.log("ConversationAccordion is being rendered", conversations);

  return (
    <div className="accordion">
      {(conversations || []).map((conversation: any) => (
        <div key={conversation.conversation_id} className="accordionItem">
          <div
            className="accordionTitle justify-between"
            onClick={() => handleClick(conversation.conversation_id)}
          >
            <div className="flex items-center">
              <Image
                className="ml-4 rounded-full"
                src={getImageUrl(conversation.potential_match_name)}
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
                Match Score: {conversation.score * 10}
              </span>
              <span className="mr-4 text-3xl font-thin flex items-center">
                {activeIndex === conversation.conversation_id ? "-" : "+"}
              </span>
            </div>
          </div>
          {activeIndex === conversation.conversation_id && (
            <div className="accordionContent">
              {conversation.new_conversation.map(
                (message: any, index: number) => (
                  <div
                    className="flex items-center mb-2"
                    key={message.message_index}
                  >
                    <Image
                      className="ml-4 h-6 w-6 rounded-full"
                      src={getImageUrl(message.user)}
                      alt=""
                      width={64}
                      height={64}
                    />
                    <p className="ml-2">
                      <strong>{message.user}:</strong> {message.message}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConversationAccordion;
