const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  'critic surprise dolphin cook guitar other hero fall pepper suit physical improve',
  'https://rinkeby.infura.io/v3/aa67bc7a216c4c3bb5b5c60e02ed8736',
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000", gasPrice: '5000000000' });

  console.log("Contract deployed to", result.options.address);
};
deploy();

