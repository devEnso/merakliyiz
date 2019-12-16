import React, { Component } from 'react'
import styled from 'styled-components';

import { Anchor, Box, Footer, grommet, Grommet, Main, Text } from "grommet";
import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter
} from "grommet-icons";

const Social = styled.section`
  padding-right: 50%;
`;


class MerakliFooter extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
                <Main background="light-4" elevation="large" pad="large" border>
                    <Text margin="small" size="xsmall" textAlign="center">
                        <Anchor
                            a11yTitle="Share feedback on Github"
                            href="https://www.instagram.com/"
                            icon={<Instagram color="brand" />}
                        />
                        <Anchor
                            a11yTitle="Chat with us on Slack"
                            href="https://www.facebook.com/"
                            icon={<FacebookOption color="brand" />}
                        />
                        <Anchor
                            a11yTitle="Follow us on Twitter"
                            href="https://twitter.com/"
                            icon={<Twitter color="brand" />}
                        />
                    </Text>
                    <Box flex />
                </Main>
                <Footer background="dark-1" pad="large">

                </Footer>
                <Footer
                    background="dark-2"
                    pad={{ horizontal: "large", vertical: "small" }}
                >
                    <Box direction="row" gap="small">
                        <GrommetIcon color="brand" />
                        <Text alignSelf="center">grommet.io</Text>
                    </Box>
                    <Text textAlign="center" size="small">
                        © 2019 Copyright
                 </Text>
                </Footer>
            </Grommet>
        )
    }
}

export default MerakliFooter
