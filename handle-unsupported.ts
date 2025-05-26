import { Client } from "@xmtp/xmtp-js";

async function handleUnsupportedContent(client: Client, content: any, fallback: string | undefined) {
  const codec = client.codecFor(content.contentType);
  if (!codec) {
    if (fallback !== undefined) {
      console.log("Unsupported content, fallback message:", fallback);
    } else {
      console.log("Unsupported content with no fallback.");
    }
  }
}

export default handleUnsupportedContent;
