import { Client } from "@xmtp/xmtp-js";

async function listDMs(client: Client) {
  const dms = await client.conversations.listDms();
  for (const dm of dms) {
    console.log("DM with:", dm.peerAddress);
  }
}

export default listDMs;
