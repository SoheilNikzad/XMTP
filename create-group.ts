import { Client } from "@xmtp/browser-sdk";

export async function createGroupChat(client: Client, inboxIds: string[]) {
  const group = await client.conversations.newGroup(inboxIds);
  return group;
}
