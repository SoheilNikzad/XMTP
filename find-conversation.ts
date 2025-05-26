import { Client } from "@xmtp/xmtp-js";

async function findConversation(client: Client, conversationId: string) {
  const convo = await client.conversations.getConversationById(conversationId);
  console.log("Found Conversation:", convo);
  return convo;
}

export default findConversation;
