import { useId } from 'react';
//неконтрольована форма

const LoginForm = () => {
  /* const handleSubmit = event => {
    event.preventDefault();
    console.log(event);

    const form = event.target;
    const { login, password } = form.elements;

    onLogin({
      login: login.value,
      password: password.value,
    });
    form.reset();
  };*/
  const loginId = useId();
  const passwordId = useId();

  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="passwort" name="password" id={passwordId} />

      <button type="submit">Log in</button>
    </form>
  );
};
export default LoginForm;
