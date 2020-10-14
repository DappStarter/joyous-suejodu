require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rifle stereo pull hunt casual equal gauge'; 
let testAccounts = [
"0x32928a47c8da1393752b36e159e5cceb76d5c1cadb58b6e66622e8c6e0bd535a",
"0xb8700ad3ded7b158ecb5288eaf633a153a3a718be9153ac08095fdaff4ec3c50",
"0xbb809f1459611d986cc991e42e6613364f76f3ba81055f668b3fb4d2f0716722",
"0xbcf37c9f3ee84fd00e73ec749331e7bf12452935b81180f48cf90f8dd64b9819",
"0xc1e6c2e42a547edf94274857009ebbc17ddba7ba05fcd64335026e35343ff6a5",
"0x0f92632e0eaa00c5a7bc0f2269e3ab8a5ca11c998ef6baf72bfba60e1384b6e4",
"0x7155836c8ba187979e4953f50976ab0915d0b006f491615519075cc4d672f98b",
"0x0a4a8f10e5dd92eaac2d6306a6ceeb2f8bb1b38138a5a4f1e397c12088aca80e",
"0x654de98508633c4d41259f58417e3fdb4d12e40b96fe1814ef2093d2c1bf2421",
"0x16414f296b63ad1187b1865bb804cf7984fc1b5b02d61e6748dc627dd5904db3"
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
            version: '^0.5.11'
        }
    }
};
