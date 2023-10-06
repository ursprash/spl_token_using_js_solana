import {
    clusterApiUrl,
    Connection,
    PublicKey,
    Keypair,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  import {
    createMint,
    getOrCreateAssociatedTokenAccount,
    mintTo,
    transfer,
  } from "@solana/spl-token";
  
  (async () => {
    // Step 1: Connect to cluster and generate a new Keypair
    const newPair = new Keypair();
    const publicKey = new PublicKey(newPair.publicKey).toString();
    const privateKey = newPair.secretKey.toString(); // Get the private key as a string
    console.log('public key:', publicKey);
    console.log('private key:', privateKey); // Print the private key
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const fromWallet = Keypair.generate();
    const toWallet = Keypair.generate();

    const fromAirdropSignature = await connection.requestAirdrop(
    fromWallet.publicKey,
    LAMPORTS_PER_SOL
  );
  // Wait for airdrop confirmation
  await connection.confirmTransaction(fromAirdropSignature, {
    commitment: "confirmed",
  });
  })();
  
