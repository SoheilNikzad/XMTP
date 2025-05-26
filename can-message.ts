import { Client } from "@xmtp/browser-sdk";

export const checkReachability = async (client: Client, addresses: string[]) => {
  const response = await Client.canMessage(addresses);
  response.forEach((reachable, address) => {
    console.log(`${address} is ${reachable ? "reachable" : "not reachable"} on XMTP`);
  });
};