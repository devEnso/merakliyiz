import React, { Component } from 'react';
import Logo from '../img/logo.png';

import { grommet, Box, FormField, Form, Text, Heading, Button, Grommet, Image } from "grommet";

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
                <Box align="center" pad="large">
                    <Box height="small" width="small">
                        <Image
                            fit="contain"
                            src={Logo}
                        />
                    </Box>
                    <Heading color="accent-4">Giriş Yap</Heading>
                    <Form>
                        <FormFieldLabel name="firstName" label="Adınız" required />
                        <FormFieldLabel name="password" label="Şifre" required />
                        <FormFieldLabel name="email" label="Email" />
                        <Button type="submit" label="Submit" primary />
                        <Text margin={{ left: "small" }} size="small" color="status-critical">
                            * Isteniliyor
                        </Text>
                    </Form>
                </Box>
            </Grommet>
        )
    }
}

export default Login
