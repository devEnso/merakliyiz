import React, { Component } from 'react';
import Logo from '../img/logo.png';

import { Anchor, Box, Footer, grommet, Grommet, Main, Text } from "grommet";
import {
    FacebookOption,
    Instagram,
    Twitter
} from "grommet-icons";


class MerakliFooter extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
                <Main background="light-4" elevation="large" pad="large">
                    <Text margin="small" size="medium" textAlign="center">
                        <Anchor
                            a11yTitle="Share feedback on Github"
                            href="https://www.instagram.com/"
                            icon={<Instagram color="brand" />}
                            label="Instagram'dan takip edebilirsiniz!"
                            margin="large"
                        />
                        <Anchor
                            a11yTitle="Chat with us on Slack"
                            href="https://www.facebook.com/"
                            icon={<FacebookOption color="brand" />}
                            label="Facebook'dan takip edebilirsiniz"
                            margin="large"
                        />
                        <Anchor
                            a11yTitle="Follow us on Twitter"
                            href="https://twitter.com/"
                            icon={<Twitter color="brand" />}
                            label="Twitter'dan takip edebilirsiniz"
                            margin="large"
                        />
                    </Text>
                    <Box flex />
                </Main>

                <Footer background="dark-3" pad="large">
                    <Box direction="row-responsive" gap="xsmall">
                        <Box align="center" gap="small">
                            <img width="100px" src={Logo} alt="merakliyiz" />
                            <Text alignSelf="center" color="brand" weight="bold">
                                merakliyiz.com
                            </Text>
                        </Box>
                    </Box>
                    <Box direction="column" border={{ color: 'brand', size: 'xxsmall' }} pad='xxsmall'>
                        <Text>Merakliyiz</Text>
                        <br/>
                        <Anchor label="anasayfa" href="/"  />
                        <Anchor label="giriş" href="/login"  />
                        <Anchor label="uye ol" href="/signup"  />
                    </Box>
                    <Box direction="column" border={{ color: 'brand', size: 'xxsmall' }} pad='xxsmall'>
                        <Text>Legal</Text>
                        <br/>
                        <Anchor label="şartlar" href="/sartlar" />
                        <Anchor label="gizlilik" href="gizlilik" />
                        <Anchor label="güvenlik" href="guvenlik" />
                    </Box>
                    <Box direction="column" border={{ color: 'brand', size: 'xxsmall' }} pad='xxsmall'>
                        <Text>Biz</Text>
                        <br/>
                        <Anchor label="hakkimizda" href="hakkimizda" />
                        <Anchor label="medya" href="medya" />
                        <Anchor label="aramıza katıl!" href="job" />
                    </Box>
                </Footer>
            </Grommet>
        )
    }
}

export default MerakliFooter
