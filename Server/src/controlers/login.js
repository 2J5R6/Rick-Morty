const usersList = require('../utils/users');

const userLogin  = (req,res)=>{
    // const {email, password} = req.query
    // const login= {
    //     access : true && !!usersList
    //         .filter(user=>user.email === email)
    //         .filter(trylog=>trylog.password === password).length
    // }
    // res.json(login)


    const { email, password } = req.query;

    const valido = usersList.find(
    (user) => user.email === email && user.password === password
    );
    
    if (valido) res.status(200).json({ access: true });
    else res.status(200).json({ access: false });
}


module.exports = userLogin;