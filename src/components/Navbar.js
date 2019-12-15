import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

//grommet işlevleri
import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";
const Logo = ({ name, ...rest }) => (
  <Box pad="small" gap="small" direction="row" align="start">
    <Box
      height="xxsmall"
      width="xxsmall"
      background="url(https://i.hizliresim.com/YdoA8Z.png)"
      {...rest}
    />
  </Box>
);

const Heading = styled.h1`
  font-size: 1.5em;
  color: #7D4CDB;
  padding-left: 105%;
  margin-top: 24%
`;

class Navbar extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <Header background="light-4" pad="small">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>
            <Heading level={5} margin="" align="end" color="accent-1" >merakliyiz.com</Heading>
          </Logo>
          </Link>
          <Box direction="row" gap="medium">
            <Anchor label="Login" href="/login" />
            <Anchor label="Signup" href="/signup" />
          </Box>
        </Header>
      </Grommet>
    )
  }
}

export default Navbar


