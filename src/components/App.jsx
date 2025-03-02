import Product from './Product';
import './App.css';
import BookList from './BookList';
import favBooks from './Books';
import { Alert } from './Alert';
import UserMenu from './User';
import LoginForm from './LoginForm/LoginForm';
import SearchBar from './SearchBar/SearchBar';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import { useState } from 'react';
import LoginForm2 from './LoginForm2/LoginForm2';

export default function App() {
  const handleLogin = userData => {
    console.log(userData);
  };
  const [lang, setLang] = useState('uk');

  const [coffeeSize, setCoffeeSize] = useState('sm');
  const handleSizeChange = event => {
    setCoffeeSize(event.target.value);
  };

  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = event => {
    setHasAccepted(event.target.checked);
  };

  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <>
        <h1>Books of the week</h1>
        <BookList books={favBooks} />
      </>
      <>
        <UserMenu />
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error">There was an error during transaction!</Alert>
        <Alert variant="success">
          Payment received, thank you for your purchase!
        </Alert>
        <Alert variant="warning">
          Please update your profile contact information
        </Alert>
      </>
      <div>
        <h1>Please login to your account!</h1>
        <LoginForm onLogin={handleLogin} />
      </div>
      <SearchBar />
      <>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </>
      <>
        <h1>Select coffe size</h1>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === 'sm'}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === 'md'}
            onChange={handleSizeChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === 'lg'}
            onChange={handleSizeChange}
          />
          Large
        </label>
        <p>
          <b>Selected size:</b> {coffeeSize}
        </p>
      </>
      <>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
          />
          I accept terms and conditions
        </label>
        <button type="button" disabled={!hasAccepted}>
          Proceed
        </button>
      </>
      <>
        <LoginForm2 />
      </>
    </div>
  );
}
