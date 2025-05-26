import { Client } from "@xmtp/browser-sdk";

export async function createDM(client: Client, inboxId: string) {
  const dm = await client.conversations.newDm(inboxId);
  return dm;
}
