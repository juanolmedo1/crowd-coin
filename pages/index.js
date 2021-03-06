import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns = () => {
        const { campaigns } = this.props;
        const items = campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true,
            }
        });
        return <Card.Group items={items} />
    } 

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    {this.renderCampaigns()}
                    <Button 
                        content='Create Campaign' 
                        icon='add circle' 
                        labelPosition='left' 
                        primary />
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;