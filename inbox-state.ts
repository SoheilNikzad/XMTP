import { Client } from "@xmtp/browser-sdk";

async function getInboxState(client: Client) {
  const inboxState = await client.preferences.inboxState();
  console.log("Inbox state:", inboxState);
}

export default getInboxState;
