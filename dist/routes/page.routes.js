"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
//Home
pageRouter.get('/', (req, res) => {
    res.status(200).send('Welcome To My Webpage');
});
exports.default = pageRouter;
//this page is to test if my server renders this properly and its working
