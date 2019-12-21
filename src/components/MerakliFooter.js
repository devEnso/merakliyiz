import React, { Component } from 'react';
import Logo from '../img/logo.png';
import styled from 'styled-components';
import media from 'styled-media-query';

import { Anchor, Box, Footer, grommet, Grommet, Main, Text } from "grommet";
import {
    FacebookOption,
    Instagram,
    Twitter
} from "grommet-icons";


const Socials = styled.section`
    background: #DADADA;
    padding: 48px;
  ${media.lessThan("medium")`
  padding: 0px;
`}
`;

const Socials2 = styled.section`
    margin: 0px;
    padding-bottom: 45px;
    font-size: 16px;
    line-height: 41px;
    text-align: center;
  ${media.lessThan("medium")`
    margin: 0px;
    padding-top: 45px;
    padding-bottom: 45px;
    font-size: 16px;
    line-height: 41px;
    text-align: center;
`}
`;

const StyledFooter = styled.section`
    font-size: 22px;
    line-height: 41px;
    text-align: center;
  ${media.lessThan("medium")`
  font-size: 12px;
  line-height: 24px;
  text-align: center
  border={{ color: 'brand', size: 'xsmall' }}
`}
`;

class MerakliFooter extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
                <Socials>
                    <Main background="light-4">
                        <Socials2>
                            <Text>
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
                        </Socials2>
                        <Box flex />
                    </Main>
                </Socials>
                <StyledFooter>
                    <Footer background="dark-3" pad="large">
                        <Box direction="row-responsive" gap="xsmall">
                            <Box align="center" gap="small">
                                <img width="100px" src={Logo} alt="merakliyiz" />
                                <Text alignSelf="center" color="brand" weight="bold">
                                    merakliyiz.com
                            </Text>
                            </Box>
                        </Box>
                        <Box direction="column" pad='xxsmall'>
                            <Text alignSelf="center" weight="bold">Merakliyiz</Text>
                            <br />
                            <Anchor label="anasayfa" href="/" />
                            <Anchor label="giriş" href="/login" />
                            <Anchor label="uye ol" href="/signup" />
                        </Box>
                        <Box direction="column" pad='xxsmall'>
                            <Text alignSelf="center" weight="bold">Legal</Text>
                            <br />
                            <Anchor label="şartlar" href="/sartlar" />
                            <Anchor label="gizlilik" href="gizlilik" />
                            <Anchor label="güvenlik" href="guvenlik" />
                        </Box>
                        <Box direction="column" pad='xxsmall'>
                            <Text alignSelf="center" weight="bold">Biz</Text>
                            <br />
                            <Anchor label="hakkimizda" href="hakkimizda" />
                            <Anchor label="medya" href="medya" />
                            <Anchor label="Job" href="job" />
                        </Box>
                    </Footer>
                </StyledFooter>
            </Grommet>
        )
    }
}

export default MerakliFooter
