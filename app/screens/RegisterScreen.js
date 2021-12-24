import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import AppScreen from '../components/AppScreen'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function RegisterScreen() {
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{name: "",email: "", password: ""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    placeholder="Name"
                    icon="account"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="username"
                    keyboardType="default"
                />
                <AppFormField
                    name="email"
                    placeholder="Email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <AppFormField
                    name="password"
                    placeholder="Password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton title='Register' />
            </AppForm>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
})
