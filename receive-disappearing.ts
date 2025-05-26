import { Client, DecodedMessage } from "@xmtp/browser-sdk";

export async function receiveDisappearingMessages(client: Client) {
  const stream = await client.conversations.streamAllMessages();
  for await (const message of stream) {
    console.log("Received message:", message.content);
  }
}