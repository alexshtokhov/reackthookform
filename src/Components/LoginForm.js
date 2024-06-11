import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import styles from './LoginForm.module.css';
import {useNavigate} from 'react-router-dom';

const LoginForm = ({setIsAuthenticated}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://example.com/api/auth/login', data);
            console.log('Успешный вход:', response.data);
            setIsAuthenticated(true);
            navigate('/protected');
        } catch (error) {
            console.error('Ошибка аутентификации:', error);
        }
    };
    const registration = useNavigate();

    const handleClick = () => {
        registration('/registration');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className={styles.emailinput}>Email</label>
                <input
                    type="email"
                    {...register('email', {required: 'Email обязателен'})}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label className={styles.emailinput}>Password</label>
                <input
                    type="password"
                    {...register('password', {required: 'Пароль обязателен'})}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <button className={styles.buttons} type="submit">Sign in</button>
                <button type="submit" onClick={handleClick}>Sign up</button>
            </div>
        </form>
    );
};

export default LoginForm;