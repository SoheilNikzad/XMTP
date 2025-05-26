import { Client } from "@xmtp/browser-sdk";

async function syncMessages(client: Client, conversationId: string) {
  const conversation = await client.conversations.findConversationById(conversationId);
  if (conversation) {
    await conversation.sync();
    console.log("Messages synced for conversation:", conversationId);
  } else {
    console.error("Conversation not found:", conversationId);
  }
}

export default syncMessages;
