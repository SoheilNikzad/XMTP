import { Client } from "@xmtp/browser-sdk";

export async function checkReachability(client: Client, identities: string[]): Promise<Map<string, boolean>> {
  const result = await Client.canMessage(identities);
  return result;
}
