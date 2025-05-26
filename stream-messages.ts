import { Client } from "@xmtp/browser-sdk";

async function streamAllMessages(client: Client) {
  const stream = await client.conversations.streamAllMessages();
  for await (const message of stream) {
    console.log("New message received:", message);
  }
}

export default streamAllMessages;
