const apiRouter = require('express').Router();

const productsRouter = require('./products');
const turorialRouter = require('./turorials');

//apiRouter.get("/turorials", tutorialsa.findAll);
//router.use('/products', products);
//router.use('/turorials',turorials);

apiRouter.use('/turorials',turorialRouter);
apiRouter.use('/products',productsRouter);
module.exports = apiRouter;

