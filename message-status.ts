import { Conversation } from "@xmtp/xmtp-js";

async function showMessageStatuses(conversation: Conversation) {
  const messages = await conversation.messages();
  for (const msg of messages) {
    console.log("Message:", msg.content, "| Status:", msg.sent ? "Sent" : msg.status);
  }
}

export default showMessageStatuses;
