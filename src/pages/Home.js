import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import ForHome from '../components/ForHome';

//grommet işlevleri
import {
  Box,
  Grommet,
  Stack,
  Image,
  Button
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
              <ForHome/>
            </Box>
          </Box>
        </Body>
      </Grommet>
    )
  }
}

export default Home
