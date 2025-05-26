import { Client, ConsentEntityType, ConsentState } from "@xmtp/browser-sdk";

async function setConsent(client: Client, groupId: string) {
  await client.setConsentStates([
    {
      entityId: groupId,
      entityType: ConsentEntityType.GroupId,
      state: ConsentState.Allowed,
    },
  ]);
  console.log("Consent set for group:", groupId);
}

export default setConsent;
