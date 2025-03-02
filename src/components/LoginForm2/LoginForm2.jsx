import { useState } from 'react';
//контрольована форма
//Якщо значення полів форми є не лише необхідними у момент її відправлення, а й кожного разу при зміні значень, наприклад, для додавання валідації полів, то таку форму називають контрольованою.

const LoginForm2 = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm2;
