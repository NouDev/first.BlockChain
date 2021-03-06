let BlockChain = require("./BlockChain/blockchain");


let blockchain = new BlockChain();

let hash = require("object-hash");

let PROOF = 1560;

let validProof  = (proof) => {
    let guessHash = hash(proof);
    console.log("Hashing: ", guessHash);
    return guessHash == hash(PROOF);
};

let proofOfWork = () => {
    let proof = 0;
    while(true){
        if(!validProof(proof)){
            proof++;
        }
        else{
            break;
        }
    }
    return proof;
}

if(proofOfWork() == PROOF) {
    blockchain.addNewtransaction("islem", "alex", 200);
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
}


console.log("Chain : ", blockchain.chain);