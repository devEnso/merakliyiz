import React, { Component } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

import Logo from '../img/logo.png';
import ForHome from '../components/ForHome';
import MerakliFooter from '../components/MerakliFooter';

//grommet işlevleri
import {
  Box,
  Grommet,
  Stack,
  Image,
  Button,
  Heading,
  Anchor
} from "grommet";
import { Next } from "grommet-icons";

const Cont = styled.section`
  padding: 10%;
  padding-top: 0%;
`;

const Wrapper = styled.section`
  padding-right: 50%;
`;

const Wrapper2 = styled.section`
  padding-left: 50%;
  margin-top: -6%;
  ${media.lessThan("medium")`
  padding-left: 50%;
  margin-top: -20%;
  font-siz: 13px
`}
`;

const Body = styled.section`
  background-color: gainsboro;
`;

const Title1 = styled.section`
  text-align: center;
`;

const Title2 = styled.section`
  text-align: center;
  padding-left: 33%;
  ${media.lessThan("medium")`
  padding-left: 0px;
`}
`;

class Home extends Component {
  render() {
    return (
      <Grommet full>
        <Body>
          <Stack fill>
            {/* navbar */}
            <Box
              align="center"
              pad="large"
              gridArea="header"
            >
              <Wrapper>
                <Image fit="contain" src={Logo} style={{ width: '40%' }} />
              </Wrapper>
              <Wrapper2>
                <Button primary label="Hemen Başla!" href="/signup" icon={<Next />} />
              </Wrapper2>
            </Box>
            {/* navbar end */}
          </Stack>
          <Box
            direction="row-responsive"
            justify="center"
            align="center"
            pad="xlarge"
            gap="medium"
          >
            <Box
              pad="large"
              align="center"
              background={{ color: "light-2", opacity: "strong" }}
              round
              gap="small"
            >
              <ForHome />
            </Box>
          </Box>
          <Cont>
            <Title1>
                <Box margin="small">
                  <Heading size="large">merak ettiğin, aklında olanları sor gitsin!</Heading>
                </Box>
            </Title1>
            <Title2>
              <Heading level={3}>iki türlü seçim yapabilirsin, soru sormak isteyen. cevaplamak isteyen, soru soran kişiler ayrıca cevaplayabilir. <Anchor label="detaylı ayrıntı için tıkla!" href="/hakkimizda" /> veyahut <Anchor label="biliyorsan hemen üye ol" href="/signup" /></Heading>
            </Title2>
          </Cont>
          <MerakliFooter />
        </Body>
      </Grommet>
    )
  }
}

export default Home
