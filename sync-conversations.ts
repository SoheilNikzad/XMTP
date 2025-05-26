import { Client } from "@xmtp/browser-sdk";

async function syncConversations(client: Client) {
  await client.conversations.sync();
  console.log("Conversations synced.");
}

export default syncConversations;
