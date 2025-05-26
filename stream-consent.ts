import { Client } from "@xmtp/xmtp-js";

async function streamConsentChanges(client: Client) {
  const stream = await client.preferences.streamConsent();
  for await (const update of stream) {
    console.log("Consent update:", update);
  }
}

export default streamConsentChanges;
