import { Client } from "@xmtp/browser-sdk";

export async function getConversationById(client: Client, conversationId: string) {
  const conversation = await client.conversations.getConversationById(conversationId);
  return conversation;
}
