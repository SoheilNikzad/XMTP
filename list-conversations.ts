
import { Client } from "@xmtp/xmtp-js";

async function listConversations(client: Client) {
  const conversations = await client.conversations.list();
  for (const conversation of conversations) {
    console.log("Conversation ID:", conversation.id);
  }
}

export default listConversations;
