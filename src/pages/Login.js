import React, { Component } from 'react';
import Logo from '../img/logo.png';
import MerakliFooter from '../components/MerakliFooter';
import styled from 'styled-components';

import { grommet, Box, FormField, Form, Text, Heading, Button, Grommet, Image, Paragraph, Anchor } from "grommet";

const Cont = styled.section`
    margin: 8%;
`;

const FormFieldLabel = props => {
    const { required, label, ...rest } = props;
    return (
        <FormField
            label={
                required ? (
                    <Box direction="row">
                        <Text>{label}</Text>
                        <Text color="status-critical">*</Text>
                    </Box>
                ) : (
                        label
                    )
            }
            required={required}
            {...rest}
        />
    );
};

class Login extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
                <Cont>
                <Box  align="center" pad="large">
                    <Box height="small" width="small">
                        <Image
                            fit="contain"
                            src={Logo}
                        />
                    </Box>
                    <Heading color="accent-4">Giriş Yap</Heading>
                    <Form>
                        <FormFieldLabel name="username" label="Kullanıcı Adı" required/>
                        <FormFieldLabel
                            label="Şifre" 
                            type={"password"}
                            required
                        />
                        <Button type="submit" label="Giriş Yap" primary />
                        <Text margin={{ left: "small" }} size="small" color="status-critical">
                            * Isteniliyor
                        </Text>
                        <Paragraph>
                            Üye değil misiniz? <Anchor label="Hemen üye olun!" href="/signup" /> 
                        </Paragraph>
                    </Form>
                </Box>
                </Cont>
                <MerakliFooter/>
            </Grommet>
        )
    }
}

export default Login
