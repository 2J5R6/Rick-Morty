const express = require('express');
const getCharById = require('../controlers/getCharById')
const { postFav, deleteFav } = require("../controlers/handleFavorites");
const userLogin = require("../controlers/login");
// const {Router} = express
// const router = Router()
const router = express.Router()


router.get('/character/:id', getCharById );
router.get("/login", userLogin);
router.post("/fav",postFav);
router.delete("/fav/:id", deleteFav);


module.exports = router;