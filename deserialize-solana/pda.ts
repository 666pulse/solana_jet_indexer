import * as anchor from "@coral-xyz/anchor";
const { BN, Program, AnchorProvider } = anchor;
import { Idl } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import idl from "./idl/device_did.json" assert { type: "json" };

// pub struct Did {
//   pub name: String,
//   pub serial_num: String,
//   pub mint_at: u64,
//   pub owner: Pubkey,
//   pub bump_seed: u8,
// }

async function main() {
  const devrpc =
    "";
  const conn = new Connection(devrpc);

  const programId = new PublicKey(
    "1234WPYMnkT2bx5MB3uLmixeDuaCHDpd3mXNhZGimKWg",
  );

  const provider = AnchorProvider.local(devrpc);
  const program = new Program(idl as Idl, programId, provider);

  const _addr = "7Z3qH3AUc72EGiQnZm3QwLrfsHGnZf4YaYcnF8hvbi6K";
  const addr = new PublicKey(_addr);

  // PDA
  // 99ZFEKSnjWM3hLsja89Z8fWc4vrXjmD9pkpF6koACVQJ
  const [pdaAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from("did"), addr.toBytes()],
    programId,
  );

  console.log("pda: ", pdaAccount);

  // https://explorer.solana.com/address/99ZFEKSnjWM3hLsja89Z8fWc4vrXjmD9pkpF6koACVQJ?cluster=devnet
  const accountInfo = await program.account.did.fetch(pdaAccount);

  console.log(accountInfo);

}

main();
