import { Client } from "@xmtp/browser-sdk";

export async function getConversationSettings(client: Client, conversation: any) {
  const settings = await conversation.messageDisappearingSettings();
  const isEnabled = await conversation.isDisappearingMessagesEnabled();
  return { settings, isEnabled };
}