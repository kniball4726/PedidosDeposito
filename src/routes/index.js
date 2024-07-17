const express = require('express')
const router = express.Router();
const fs = require('fs')

const PATH_ROUTES = __dirname;
const listRouts = fs.readdirSync(PATH_ROUTES);

listRouts.forEach((element) => {
    if(element !== 'index.js'){
        const route = require(`/${PATH_ROUTES}`,`/${element}`)
        router.use(route)
        }
})

module.exports = router


/*const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)
    if (name !== 'index'){
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router;*/