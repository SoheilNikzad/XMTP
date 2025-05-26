import { Client } from "@xmtp/xmtp-js";

async function listGroups(client: Client) {
  const groups = await client.conversations.listGroups();
  for (const group of groups) {
    console.log("Group ID:", group.groupId);
  }
}

export default listGroups;
