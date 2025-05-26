import { Client } from "@xmtp/xmtp-js";

async function getInboxPreferences(client: Client) {
  const prefs = await client.preferences.inboxState();
  console.log("Inbox Preferences:", prefs);
  return prefs;
}

export default getInboxPreferences;
