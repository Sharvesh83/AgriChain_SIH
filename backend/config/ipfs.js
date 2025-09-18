const { create } = require('ipfs-http-client');

// Replace these with your Infura project credentials
const projectId = "3f0fef3eebd942dbb1c19b2b4a724172";
const projectSecret = "BPmeITuSmRuY+Zg4jOARkT94MP5ctgr+Q3nbxKtNWsm/CN1+rmZjzw";

const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

module.exports = ipfs;
