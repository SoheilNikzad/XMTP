import { Client, ConsentEntityType } from "@xmtp/browser-sdk";

export async function removeConsent(client: Client, groupId: string) {
  await client.setConsentStates([
    {
      entityId: groupId,
      entityType: ConsentEntityType.GroupId,
      state: undefined,
    },
  ]);
}