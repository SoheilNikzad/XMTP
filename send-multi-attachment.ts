export async function sendMultipleRemoteAttachments(convo: any, attachments: any[]) {
  await convo.send({
    multiRemoteAttachment: {
      attachments,
    },
  });
}