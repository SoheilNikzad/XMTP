import { Client } from "@xmtp/xmtp-js";

async function findDM(client: Client, inboxId: string) {
  const dm = await client.conversations.getDmByInboxId(inboxId);
  console.log("Found DM:", dm);
  return dm;
}

export default findDM;
