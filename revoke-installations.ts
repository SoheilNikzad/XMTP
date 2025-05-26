import { Client } from "@xmtp/xmtp-js";

async function revokeAllOtherInstallations(client: Client) {
  await client.revokeAllOtherInstallations();
  console.log("Revoked all other installations.");
}

export default revokeAllOtherInstallations;
