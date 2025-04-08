"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Set up your server
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
dotenv_1.default.config();
//Creating Server
const app = (0, express_1.default)();
//Middleware
app.use(express_1.default.json());
//Routes
app.use('/products', product_routes_1.default);
//fallback
app.use((req, res) => {
    res.status(404).send('Invalid route!');
});
//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
