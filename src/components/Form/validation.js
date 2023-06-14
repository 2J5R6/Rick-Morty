const validation=(userData, errors)=>{
//  console.log("validation called with:", userData, errors);
 let newErrors = {...errors};
 //-------EMAIL-------------
 if (!userData.email) {
 newErrors.email="Enter your email...";
 console.log("EMPTY:", userData, errors);
 }
 else if (userData.email.length > 35) {
 newErrors.email="No more than 34 characters";
 }else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
 newErrors.email="Invalid email";
 }else{
 newErrors.email=""
 }
 
//-------PASSWORD-----------
 if (userData.password.length < 6 || userData.password.length > 10) {
 newErrors.password="Between 6 and 10 characters.";
 }
 else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(userData.password)) {
 newErrors.password= "At least one special character.";
 }
 else if(!/[0-9]/.test(userData.password)) {
 newErrors.password="At least one number"; 
 }
 else{newErrors.password=""}
 
 return newErrors;
}

export default validation;