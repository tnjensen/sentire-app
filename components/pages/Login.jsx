import {h, Fragments} from 'start-dom-jsx';
import displayMessage from '../common/displayMessage';
import { saveUser, saveToken } from '../common/storage';
import { baseUrl } from '../common/settings';

function Login() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');

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
    <div class="login-form">
    <div class="wrapper">
        <div class="loginLeft">
            <h3 class="loginLogo">Sentire App</h3>
            <span class="loginDesc">
            Log in to connect with your listening friends
            </span>
        </div>
        <div class="loginRight">
            <form class="loginBox" onSubmit={handleClick}>
                <input placeholder='email' type="email" class="loginInput" id="email" required />
                <input placeholder='password' type="password" class="loginInput" id="password" required minLength="6" />
                <button class="loginButton">Log in</button>
                <span class="forgotPassword">Forgot password ?</span>
                <button class="registerButton">Create a new account</button>     
            </form>          
        </div>
    </div>
    </div>
  )
}

export default Login