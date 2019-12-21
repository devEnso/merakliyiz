import React, { Component } from 'react';
import Logo from '../img/logo.png';
import styled from 'styled-components';
import MerakliFooter from '../components/MerakliFooter';

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

class Signup extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
                <Cont>
                <Box align="center" pad="large">
                    <Box height="small" width="small">
                        <Image
                            fit="contain"
                            src={Logo}
                        />
                    </Box>
                    <Heading color="accent-4">Uye ol</Heading>
                    <Form>
                        <FormFieldLabel name="username" label="Kullanıcı Adı" required />
                        <FormFieldLabel name="email" label="Email" required />
                        <FormFieldLabel
                            label="Şifre"
                            type={"password"}
                            required
                        />
                        <FormFieldLabel
                            label="Şifre Tekrar"
                            type={"password"}
                            required
                        />
                        <Button type="submit" label="Uye ol!" primary />
                        <Text margin={{ left: "small" }} size="small" color="status-critical">
                            * Isteniliyor
                        </Text>
                        <Paragraph>
                            Zaten üye misiniz? <Anchor label="Giriş yapın o halde" href="/login" /> 
                        </Paragraph>

                    </Form>
                </Box>
                </Cont>
                <MerakliFooter/>
            </Grommet>
        )
    }
}

export default Signup
