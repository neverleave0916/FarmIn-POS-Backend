const apiRouter = require('express').Router();

const productsRouter = require('./products');
const turorialRouter = require('./turorials');
const memberRouter = require('./members');
const supplierRouter = require('./suppliers');
const product_categoriesRouter = require('./product_categories')

//apiRouter.get("/turorials", tutorialsa.findAll);
//router.use('/products', products);
//router.use('/turorials',turorials);

apiRouter.use('/turorials',turorialRouter);
apiRouter.use('/products',productsRouter);
apiRouter.use('/members',memberRouter);
apiRouter.use('/suppliers',supplierRouter);
apiRouter.use('/product_categories',product_categoriesRouter);
module.exports = apiRouter;

