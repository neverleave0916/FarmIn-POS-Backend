const apiRouter = require('express').Router();

const productsRouter = require('./products');
const product_categoryRouter = require('./product_category');
const published_statusRouter = require('./published_status');
const turorialRouter = require('./turorials');
const memberRouter = require('./members');
const supplierRouter = require('./suppliers');

//apiRouter.get("/turorials", tutorialsa.findAll);
//router.use('/products', products);
//router.use('/turorials',turorials);

apiRouter.use('/turorials',turorialRouter);
apiRouter.use('/products',productsRouter);
apiRouter.use('/product_category',product_categoryRouter);
apiRouter.use('/published_status',published_statusRouter);
apiRouter.use('/members',memberRouter);
apiRouter.use('/suppliers',supplierRouter);
module.exports = apiRouter;

