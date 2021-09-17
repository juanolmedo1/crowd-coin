import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const CAMPAIGN_FACTORY_ADDRESS = '0x379B8bb591e8295B8c71e584928Ec8d21e94f123';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    CAMPAIGN_FACTORY_ADDRESS
);

export default instance;