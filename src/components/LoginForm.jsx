import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';

import MyTextInput from './UI/input/MyInput'

const LoginForm = () => {


    const navigate = useNavigate()
    const { setIsAuth, isAuth } = useContext(AuthContext)
    const serverURL = 'http://localhost:8000/formData'

    const SignupSchema = Yup.object().shape({
        login: Yup.string()
            .min(2, 'Минимум 2 буквы')
            .max(50, 'Максимум 50 букв')
            .required('Введите логин'),
        password: Yup.string()
            .min(2, 'Минимум 2 буквы')
            .max(50, 'Максимум 50 букв')
            .required('Введите пароль'),
    });
    return (
        <Formik
            className="form"
            initialValues={{ login: '', password: '' }}
            validationSchema={SignupSchema}

            onSubmit={(values, { setSubmitting }) => {
                setIsAuth(true)
                fetch('http://localhost:8000/formData', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
                }).then(() => {
                    console.log('New ACC was added')
                    navigate('/')
                })
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-group">
                        <MyTextInput
                            label="Login"
                            name="login"
                            type="text"
                            placeholder="Логин"
                        />
                    </div>
                    <div className="form-group">
                        <MyTextInput
                            label="Password"
                            name="password"
                            type="Password"
                            placeholder="Пароль"
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm