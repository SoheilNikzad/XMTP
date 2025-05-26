import { Client } from "@xmtp/browser-sdk";

export async function getDmByInboxId(client: Client, inboxId: string) {
  const dm = await client.conversations.getDmByInboxId(inboxId);
  return dm;
}
