import {h, Fragments} from 'start-dom-jsx';

export default function Register() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  
  const handleClick = async (e) => {
    e.preventDefault();
   if(confirmPassword.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords don't match!");
   }else{
   /*  const user = {
      email: email.current.value,
      password: password.current.value
    } */
    try{
      /* await axios.post("/auth/register", user);
      history.push("/login"); */
    }catch(err){
      console.log(err);
    }
   }  
}
  return (
    <div class="register-form">
    <div class="wrapper">
        <div class="registerLeft">
            <h3 class="registerLogo">Sentire App</h3>
            <span class="registerDesc">
            Register to keep in touch with your listening friends           </span>
        </div>
        <div class="registerRight">
            <form class="registerBox" onSubmit={handleClick}>
                <input placeholder='email' required id="email" class="registerInput" type="email" />
                <input placeholder='password' required id="password" class="registerInput" type="password" minLength="6" />
                <input placeholder='confirm password' required id="confirm-password" class="registerInput" type="password" />
                <button class="registerButton" type="submit">Sign up</button>     
                <button class="loginButton">Log into Account</button>
            </form>           
        </div>
    </div>
    </div>
  )
}
