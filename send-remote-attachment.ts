import { Client } from "@xmtp/browser-sdk";
import { RemoteAttachmentCodec, ContentTypeRemoteAttachment, AttachmentCodec } from "@xmtp/content-type-remote-attachment";

export async function sendRemoteAttachment(conversation: any, attachment: any, url: string) {
  const encryptedEncoded = await RemoteAttachmentCodec.encodeEncrypted(attachment, new AttachmentCodec());

  const remoteAttachment = {
    url,
    contentDigest: encryptedEncoded.digest,
    salt: encryptedEncoded.salt,
    nonce: encryptedEncoded.nonce,
    secret: encryptedEncoded.secret,
    scheme: "https://",
    filename: attachment.filename,
    contentLength: attachment.data.byteLength,
  };

  await conversation.send(remoteAttachment, { contentType: ContentTypeRemoteAttachment });
}