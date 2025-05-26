import { Client } from "@xmtp/browser-sdk";

export const setDisappearingMessageSettings = async (
  client: Client,
  inboxId: string,
  fromNs: bigint,
  inNs: bigint
) => {
  await client.conversations.newDm(inboxId, {
    messageDisappearingSettings: {
      fromNs,
      inNs
    }
  });
};