import { Client, ConsentState } from "@xmtp/browser-sdk";

async function updateConsent(client: Client, groupId: string) {
  const groupConversation = await client.conversations.findConversationById(groupId);
  await groupConversation.updateConsentState(ConsentState.Allowed);
  console.log("Consent updated for conversation:", groupId);
}

export default updateConsent;
