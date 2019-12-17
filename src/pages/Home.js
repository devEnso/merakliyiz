import React, { Component } from 'react';
import styled from 'styled-components';

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


const Wrapper = styled.section`
  padding-right: 50%;
`;

const Wrapper2 = styled.section`
  padding-left: 50%;
  margin-top: -6%;
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
`;

class Home extends Component {
  render() {
    const sizes = [
      "large",
    ];
    return (
      <Grommet full>
        <Body>
          <Stack fill>
            {/* navbar */}
            <Box
              align="center"
              pad="large"
            >
              <Wrapper>
                <Image fit="contain" src={Logo} style={{ width: '40%' }} />
              </Wrapper>
              <Wrapper2>
                <Button primary label="Hemen Başla!" icon={<Next />} />
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
          <Title1>
            {sizes.map(size => (
              <Box key={size} margin="small">
                <Heading size={size}>merak ettiğin, aklında olanları sor gitsin!</Heading>
              </Box>
            ))}
          </Title1>
          <Title2>
            <Heading level={3}>iki türlü seçim yapabilirsin, soru sormak isteyen. cevaplamak isteyen, soru soran kişiler ayrıca cevaplayabilir. <Anchor label="detaylı ayrıntı için tıkla!" href="/hakkimizda" /> veyahut <Anchor label="biliyorsan hemen üye ol" href="/signup" /></Heading>
          </Title2>
          <MerakliFooter />
        </Body>
      </Grommet>
    )
  }
}

export default Home
