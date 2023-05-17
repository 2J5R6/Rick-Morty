import React, { useState } from 'react'
import styles from "./Form.module.css"
import validation from './validation';

const Form = () => {

    const [userData,setUserData]=useState({
        email:"",
        password:"",
    });

    const [errors,setErrors]=useState({
        email:"",
        password:"",
    });


    const handleChange=(event)=>{
        const property=event.target.name;
        const value=event.target.value;
    
        setUserData({...userData, [property]: value});
        // validation({...userData, [property]: value}, errors, setErrors);
        setErrors(validation({...userData, [property]: value}, errors));
    };
    


return (
    <div className={styles.card}>    {/* https://th.bing.com/th/id/OIG.NYWs96BhvOsRCJRCd97R?pid=ImgGn */}
    <img className={styles.imaF} src={"https://th.bing.com/th/id/OIG.Lt_QGco2XJ3.L3KFBr4I?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"} alt="Logo" />
    <form>
        <label htmlFor='email'>Email</label>
            <input 
            placeholder='Email...'
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={!errors.email=="" ? styles.error : styles.success}
            />
        <p className={styles.Elerror}>{errors.email}</p>

        
        <label htmlFor='password'>Password</label>
            <input 
            placeholder='Password...'
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={!errors.password=="" ? styles.error : styles.success}
            />
        <p className={styles.Elerror}>{errors.password}</p>
        <button type="submit" className={styles.buttonSent}>Submit</button>
    </form>
    </div>
  )
}

export default Form;