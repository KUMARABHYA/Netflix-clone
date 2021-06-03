import { useState, useRef, useContext } from 'react';
import AuthContext from '../../stores/auth-context';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
      event.preventDefault();

      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      //optional : ADD validation
       setIsLoading(true);
       let url;
      if (isLogin){
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6DWZvFMFaclsIZ-brzserxzqMesKt3jw'

      }else{
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6DWZvFMFaclsIZ-brzserxzqMesKt3jw'
      }
      fetch(url, {
          method: 'POST',
          body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken:true
          }),
          headers: {
              'content-Type': 'application/json'
          }
      }
      ).then(res => {
          setIsLoading(false);
          if (res.ok) {
              //...
              return res.json();
          } else {
            return  res.json().then(data => {
                  //show an error modal
                  let errorMessage = 'Authentication failed!';
                //   if (data && data.error && data.error.message) {
                //       errorMessage = data.error.message;
                //   }
                throw new Error(errorMessage);
              });
          }
      })
      .then((data) => {
        //   console.log(data);
        authCtx.login(data.idToken);
        history.replace('/home');
      })
      .catch((err) => {
          alert(err.message);
      });


  };

  return (
    <div className="auth_area">
      <div className="auth_frm">
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Seding request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </div>
    </div>
  );
};

export default AuthForm;