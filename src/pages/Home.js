import React, { Component } from 'react';
import styled from 'styled-components';

//grommet işlevleri
import { Box, Grommet, Stack, Image } from "grommet";

const Wrapper = styled.section`
  padding-left: 40%;
`;

const Body = styled.section`
  padding: 5%;
`;

class Home extends Component {
  render() {
    return (
      <Grommet full>
        <Body>
          <Stack fill>
            <Wrapper>
              <Image fit="contain" src="https://i.hizliresim.com/YdoA8Z.png" />
            </Wrapper>
            <Box background="dark" fill>
              Test
            </Box>
          </Stack>
        </Body>
      </Grommet>
    )
  }
}

export default Home
