import React, { Component } from 'react';

import { Grommet, Box, Text } from "grommet";
import { grommet } from "grommet/themes";

export class Home extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
            <Box pad="small" gap="small">
              <Box
                width="large"
                height="large"
                round="small"
                align="center"
                justify="center"
                background="brand" 
              >
                <Text>Hey</Text>
              </Box>
            </Box>
          </Grommet>
        )
    }
}

export default Home
