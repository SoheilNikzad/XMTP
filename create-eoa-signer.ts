import type { Signer, Identifier } from "@xmtp/browser-sdk";

export async function createSigner(): Promise<Signer> {
  if (!window.ethereum) {
    throw new Error("MetaMask or compatible wallet is required.");
  }

  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const address = accounts[0];

  const identifier: Identifier = {
    identifier: address,
    identifierKind: "Ethereum",
  };

  const signer: Signer = {
    type: "EOA",
    getIdentifier: async () => identifier,
    signMessage: async (message: string): Promise<Uint8Array> => {
      const hexSignature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, address],
      });
      return Uint8Array.from(Buffer.from(hexSignature.slice(2), "hex"));
    },
  };

  return signer;
}
