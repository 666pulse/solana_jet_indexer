import { PublicKey, Connection } from "@solana/web3.js";
import { u32, u8, struct } from "@solana/buffer-layout";
import { publicKey, u64, bool } from "@solana/buffer-layout-utils";

// https://www.helius.dev/blog/solana-dev-101-deserializing-account-data-on-solana
// https://www.quicknode.com/guides/solana-development/accounts-and-data/how-to-deserialize-account-data-on-solana
// https://github.com/solana-labs/solana-program-library/blob/master/token/js/src/state/mint.ts
// https://borsh.m2.xyz/

export interface RawMint {
  mintAuthorityOption: 1 | 0;
  mintAuthority: PublicKey;
  supply: bigint;
  decimals: number;
  isInitialized: boolean;
  freezeAuthorityOption: 1 | 0;
  freezeAuthority: PublicKey;
}

export const MintLayout = struct<RawMint>([
  u32("mintAuthorityOption"),
  publicKey("mintAuthority"),
  u64("supply"),
  u8("decimals"),
  bool("isInitialized"),
  u32("freezeAuthorityOption"),
  publicKey("freezeAuthority"),
]);

async function fetchAndParse(mint: PublicKey, solanaConn: Connection) {
  console.log(`Step - 1: Fetching Account Data`);
  let data = await solanaConn.getAccountInfo(mint);
  if (!data) {
    console.log(`data is null`);
    return;
  }
  console.log(data);
  console.log();

  console.log(`Step - 2: Deserializing Found Account Data`);
  const deserialized = MintLayout.decode(data["data"]);
  console.log();

  console.log(`Step - 3: Clean and Log Deserialized Data`);
  console.log("Mint Authority Option:", deserialized.mintAuthorityOption);
  console.log("Mint Authority:", deserialized.mintAuthority.toString());
  console.log(
    "Supply:",
    (Number(deserialized.supply) / 10 ** deserialized.decimals).toLocaleString(
      undefined,
      { maximumFractionDigits: 0 },
    ),
  ); // Necessary to convert bigint
  console.log("Decimals:", deserialized.decimals);
  console.log("Initialized:", deserialized.isInitialized);
  console.log("Freeze Authority Option:", deserialized.freezeAuthorityOption);
  console.log("Freeze Authority:", deserialized.freezeAuthority.toString());
}

const mainrpc = "";
// const devrpc = "";
const conn = new Connection(mainrpc);

const addr = "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU";

const pk = new PublicKey(addr);

fetchAndParse(pk, conn);
