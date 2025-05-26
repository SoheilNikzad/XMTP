import { Client, ConsentEntityType, ConsentState } from "@xmtp/browser-sdk";

export async function updateGroupConsent(client: Client, inboxId: string) {
  await client.setConsentStates([
    {
      entityId: inboxId,
      entityType: ConsentEntityType.InboxId,
      state: ConsentState.Denied,
    },
  ]);
}