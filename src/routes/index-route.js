'use strict';

const express = require('express');
//const app = express();
const router = express.Router();

router.get('/',(req, res, next) => {
        res.status(200).send({
            title: "NodeStore API",
            version: "0.0.2"
        });
    });
    
    module.exports = router;