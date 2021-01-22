let hash = require("object-hash");


class BlockChain {

    constructor(){

        // create
        this.chain = [];
        // Transaction
        this.curr_transactions = ["nou"];

    }

    addNewBlock(prevHash){
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            prevHash: ["12"],
        };

        // Put hash
        this.hash = hash(block);

        // Add to Chain
        this.chain.push(block);
        this.curr_transactions = [];
        return block;
    }

    addNewtransaction(sender, recipient, amount){
        this.curr_transactions.push({sender, recipient, amount});
    }

    lastBlock(){
        return this.chain.slice(-1)[0];
    }

    isEmpty(){
        return this.chain.length == 0;
    }
}

module.exports = BlockChain;