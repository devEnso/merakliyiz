import React, { Component } from 'react'

import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";

const Avatar = ({ name, ...rest }) => (
    <Box
      height="xxsmall"
      width="xxsmall"
      round="full"
      background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
      {...rest}
    />
  );

class Navbar extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
            <Header background="light-4" pad="small">
              <Avatar />
              <Box direction="row" gap="medium">
                <Anchor label="Home" href="#" />
                <Anchor label="Profile" href="#" />
              </Box>
            </Header>
          </Grommet>
        )
    }
}

export default Navbar


