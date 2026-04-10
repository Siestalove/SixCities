import {useRef, FormEvent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../api/api-actions';
import {AppRoute, AuthorizationStatus} from '../../const';
import './LoginPage.css';

export default function LoginPage() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);


  const validateField = (field: 'email' | 'password'): string => {
    const email = loginRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    if (field === 'email') {
      if (!email) {
        return 'Введите email';
      }
      if (!/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email)) {
        return 'Введите правильный email';
      }
      return '';
    }

    if (field === 'password') {
      if (!password) {
        return 'Введите email';
      }
      if (password.includes(' ')) {
        return 'Пароль должен быть без пробелов';
      }
      if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
        return 'Пароль должен содержать букву и цифру';
      }
      return '';
    }

    return '';
  };

  const handleEmailChange = () => {
    setEmailError(validateField('email'));
  };

  const handlePasswordChange = () => {
    setPasswordError(validateField('password'));
  };


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const emailValidationError = validateField('email');
    const passwordValidationError = validateField('password');

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (!emailValidationError && !passwordValidationError) {
      dispatch(loginAction({
        login: loginRef.current!.value,
        password: passwordRef.current!.value
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className={`login__input form__input ${emailError ? 'error' : ''}`} type="email" name="email" placeholder="Email" required onChange={handleEmailChange} />
                {emailError && <div className="login__error">{emailError}</div>}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className={`login__input form__input ${passwordError ? 'error' : ''}`} type="password" name="password" placeholder="Password" required onChange={handlePasswordChange} />
                {passwordError && <div className="login__error">{passwordError}</div>}
              </div>
              <button className="login__submit form__submit button" type="submit" name = "sign-in-button">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
