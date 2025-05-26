import { Client } from "@xmtp/browser-sdk";

async function syncHistory(client: Client) {
  await client.conversations.syncAll();
  console.log("History sync completed.");
}

export default syncHistory;
