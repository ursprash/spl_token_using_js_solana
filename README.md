# Solana Web3.js and SPL Token 

This is a simple example demonstrating how to use the Solana Web3.js library and the SPL Token program to perform basic operations on the Solana blockchain.

## Prerequisites

Before running this code, make sure you have the following prerequisites:

- Node.js and npm installed on your machine.
- A Solana wallet with some SOL tokens for transaction fees.

## Usage

1. Generate a new Solana Keypair:

   ```javascript
   const newPair = new Keypair();
   const publicKey = new PublicKey(newPair.publicKey).toString();
   const privateKey = newPair.secretKey.toString();
   ```

   - `publicKey`: The public key of the new Keypair.
   - `privateKey`: The private key of the new Keypair.

2. Connect to the Solana cluster (Devnet in this example):

   ```javascript
   const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
   ```

3. Generate two new Solana Keypairs for wallets:

   ```javascript
   const fromWallet = Keypair.generate();
   const toWallet = Keypair.generate();
   ```

4. Request an airdrop of SOL tokens to the `fromWallet`:

   ```javascript
   const fromAirdropSignature = await connection.requestAirdrop(
     fromWallet.publicKey,
     LAMPORTS_PER_SOL
   );
   ```

5. Wait for the airdrop confirmation:

   ```javascript
   await connection.confirmTransaction(fromAirdropSignature, {
     commitment: "confirmed",
   });
   ```

## License

This code is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Solana Web3.js](https://github.com/solana-labs/solana-web3.js)
- [SPL Token](https://spl.solana.com/token)

## Author

- ursprash

Feel free to modify and expand upon this README to include additional information or context specific to your project.
