require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remind history grid gloom suspect slogan'; 
let testAccounts = [
"0x9b04a3676cfb5d1122eb19da29f71621cb02c33ec969f71c94b39d85a0b6a4bb",
"0xb62c4b0c4d3cfbbc9ba8cfa934749143a8eee3e68002f5a81187f15e12e39551",
"0xc5f5efb89a0bb1b766aca46b8144484aed03896a17bb0543c551875a29079736",
"0xae1e4d0b0263960764006ffbccbfd854787dcda713efdee2a26657bee8c292aa",
"0x765ec7f96cbec4905e1b71fcb69cd615e32487c40bd1c778e056093db2c57217",
"0xb84d60408649e9709efd01b90c88cd0591c1fdd3678907cf3f6203e36dfd92b2",
"0x637565f854bd210d8722be3e2faa17b8eeebfefd62a145de74d81c77ef3c2c36",
"0xdfb49f7cf17ecad73207210fd85ac6842731472a76b669b5b27454caa5b3d546",
"0x9f1fb3f632f7f081835383c1b40ba492477a9c57c07f3086aa9300b97652276f",
"0x8675d15b299d8467cc79988707a74106160b32a8fed4d0b3b442aad2277989c1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

