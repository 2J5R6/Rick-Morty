import React, { useState } from 'react'
import styles from "./Form.module.css"

const Form = () => {

    const [userData,setForm]=useState({
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
    
        setForm({...userData, [property]: value});
        // validate({...userData, [property]: value}, setErrors, errors);
    };
    


return (
    <div className={styles.card}>
    <img src={"https://th.bing.com/th/id/OIG.NYWs96BhvOsRCJRCd97R?pid=ImgGn"} alt="Logo" />
    <form>
        <label htmlFor='email'>Email</label>
            <input 
            placeholder='Email...'
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={errors.email ? styles.error : styles.success}
            />
        <hr/>
        <label htmlFor='password'>Password</label>
            <input 
            placeholder='Password...'
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={errors.password ? styles.error : styles.success}
            />

        <button type="submit" className={styles.buttonSent}>Submit</button>
    </form>
    </div>
  )
}

export default Form;