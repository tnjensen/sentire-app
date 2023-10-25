import { useRef } from 'react';
import styles from './Login.module.css';
import displayMessage from '../common/displayMessage';
import { saveUser, saveToken } from '../common/storage';
import { baseUrl } from '../common/settings';

function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value); 
    /* loginCall({email:email.current.value,password: password.current.value}); */
    const loginEmailValue = email.current.value.trim();
    const loginPasswordValue = password.current.value.trim();

    if(loginEmailValue.length === 0 || loginPasswordValue.length === 0){
        return displayMessage("warning", "Invalid values", ".message-container");
    }

    doLogin(loginEmailValue, loginPasswordValue);    
  }
  async function doLogin(loginEmailValue,loginPasswordValue){
    const url = baseUrl + "auth/login";
    console.log(url);
    const data = JSON.stringify({email:loginEmailValue, password:loginPasswordValue});

    const options = {
        method: "POST",
        body: data,
        headers : {
            "Content-Type": "application/json"
        }
    };

    try{
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        
        if(response.ok){
           /*  displayMessage("success", "Successfully logged in as " + json.name, ".message-container"); */
            console.log(json.accessToken);
            const token = json.accessToken;
            saveToken(token);
            const user = json.name;
            saveUser(user);
        }
        if(json.error){
            displayMessage("warning", json.error.message, ".message-container");
        }
        else{
        //Redirect to homepage if successful login
                window.location.href = "/";
            
        }
        
    }
    catch(error){
        return displayMessage("error", "Wrong username or password", ".message-container");
    }
}
  return (
    <div className={styles.login}>
    <div className={styles.wrapper}>
        <div className={styles.loginLeft}>
            <h3 className={styles.loginLogo}>Social App</h3>
            <span className={styles.loginDesc}>
            Log in to connect with your friends with our Social App
            </span>
        </div>
        <div className={styles.loginRight}>
            <form className={styles.loginBox} onSubmit={handleClick}>
                <input placeholder='email' type="email" className={styles.loginInput} ref={email} required />
                <input placeholder='password' type="password" className={styles.loginInput} ref={password} required minLength="6" />
                <button className={styles.loginButton}>Log in</button>
                <span className={styles.forgotPassword}>Forgot password ?</span>
                <button className={styles.registerButton}>Create a new account</button>     
            </form>          
        </div>
    </div>
    </div>
  )
}

export default Login