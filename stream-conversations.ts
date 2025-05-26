import { Client } from "@xmtp/browser-sdk";

async function streamConversations(client: Client) {
  const stream = await client.conversations.stream();
  for await (const conversation of stream) {
    console.log("New conversation detected:", conversation);
  }
}

export default streamConversations;
