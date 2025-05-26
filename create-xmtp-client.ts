import { Client } from "@xmtp/browser-sdk";
import type { Signer } from "@xmtp/browser-sdk";

export async function createClient(signer: Signer): Promise<Client> {
  const client = await Client.create(signer, {
    env: "dev" // or "production" depending on deployment
  });

  console.log("XMTP Client created with address:", await client.address);
  return client;
}
