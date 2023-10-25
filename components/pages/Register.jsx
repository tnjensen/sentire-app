import { useRef } from 'react';
import styles from './Register.module.css';

export default function Register() {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  
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
    <div className={styles.register}>
    <div className={styles.wrapper}>
        <div className={styles.registerLeft}>
            <h3 className={styles.registerLogo}>Social App</h3>
            <span className={styles.registerDesc}>
            Register to keep in touch with friends with Social App
            </span>
        </div>
        <div className={styles.registerRight}>
            <form className={styles.registerBox} onSubmit={handleClick}>
                <input placeholder='email' required ref={email} className={styles.registerInput} type="email" />
                <input placeholder='password' required ref={password} className={styles.registerInput} type="password" minLength="6" />
                <input placeholder='confirm password' required ref={confirmPassword} className={styles.registerInput} type="password" />
                <button className={styles.registerButton} type="submit">Sign up</button>     
                <button className={styles.loginButton}>Log into Account</button>
            </form>           
        </div>
    </div>
    </div>
  )
}
