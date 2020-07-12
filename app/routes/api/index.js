const apiRouter = require('express').Router();

const productsRouter = require('./products');
const turorialRouter = require('./turorials');
const memberRouter = require('./members');
const supplierRouter = require('./suppliers');

//apiRouter.get("/turorials", tutorialsa.findAll);
//router.use('/products', products);
//router.use('/turorials',turorials);

apiRouter.use('/turorials',turorialRouter);
apiRouter.use('/products',productsRouter);
apiRouter.use('/members',memberRouter);
apiRouter.use('/suppliers',supplierRouter);
module.exports = apiRouter;

