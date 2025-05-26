import { Client } from "@xmtp/browser-sdk";
import { ContentTypeAttachment } from "@xmtp/content-type-remote-attachment";

export async function sendAttachment(conversation: any, attachment: any) {
  await conversation.send(attachment, { contentType: ContentTypeAttachment });
}