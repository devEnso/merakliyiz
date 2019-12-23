import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebaseFolder/firebase";
import { AuthContext } from '../firebaseFolder/Auth';
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

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/dashboard");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Grommet theme={grommet} onSubmit={handleLogin}>
            <Cont>
                <Box align="center" pad="large">
                    <Box height="small" width="small">
                        <Image
                            fit="contain"
                            src={Logo}
                        />
                    </Box>
                    <Heading color="accent-4">Giriş Yap</Heading>
                    <Form>
                        <FormFieldLabel name="email" label="Kullanıcı Adı" required />
                        <FormFieldLabel
                            name="password" 
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
            <MerakliFooter />
        </Grommet>
    )
};

export default withRouter(Login);
