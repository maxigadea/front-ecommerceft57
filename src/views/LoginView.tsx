'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateLoginForm } from '@/helpers/validate';
import { login } from '@/helpers/auth.helper';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginView = () => {
    const {setUserData} = useAuth();
    const router = useRouter();
  return (
    <div>
        <h1>Login to X-STORE</h1>
        <Formik
        initialValues={{ email: '', password: ''}}
        validate={validateLoginForm}
        onSubmit={async (values) => {
            const response = await login(values)
            setUserData({token: response.token, user: response.user})
            Cookies.set("userData", JSON.stringify({token: response.token, user: response.user}))
            router.push("/")
        }}
        >
        {({ isSubmitting, errors }) => (
            <Form>
                <label>Email:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label>Password:</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={(isSubmitting || errors.email) ? true : false}>
                    Submit
                </button>
            </Form>
        )}
        </Formik>
    </div>
  )
}

export default LoginView