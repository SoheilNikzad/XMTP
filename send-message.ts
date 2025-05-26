import { Client } from "@xmtp/browser-sdk";

export async function sendMessage(client: Client, conversationId: string, message: string) {
  const conversation = await client.conversations.getConversationById(conversationId);
  if (!conversation) {
    throw new Error("Conversation not found");
  }
  await conversation.send(message);
}