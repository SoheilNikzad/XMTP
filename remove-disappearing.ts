export async function removeDisappearingMessages(conversation: any) {
  await conversation.removeMessageDisappearingSettings();
}