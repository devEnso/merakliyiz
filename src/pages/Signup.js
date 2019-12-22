import React, { useCallback } from 'react';
import Logo from '../img/logo.png';
import styled from 'styled-components';
import MerakliFooter from '../components/MerakliFooter';
import app from '../firebaseFolder/firebase';
import { withRouter } from 'react-router-dom';

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

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <Grommet theme={grommet} onSubmit={handleSignUp}>
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
                        {/* <FormFieldLabel name="username" label="Kullanıcı Adı" required /> */}
                        <FormFieldLabel name="email" label="Email" required />
                        <FormFieldLabel
                            name="password"
                            label="Şifre"
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
            <MerakliFooter />
        </Grommet>
    );
};

export default withRouter(SignUp);


