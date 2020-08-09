const apiRouter = require('express').Router();

const productsRouter = require('./products');
const turorialRouter = require('./turorials');
const memberRouter = require('./members');
const supplierRouter = require('./suppliers');
<<<<<<< Updated upstream
const purchseRouter = require('./purchase');
const purchaseproductsRouter = require('./purchaseProducts');
=======
const purchaseRouter = require('./purchases');
>>>>>>> Stashed changes

//apiRouter.get("/turorials", tutorialsa.findAll);
//router.use('/products', products);
//router.use('/turorials',turorials);

apiRouter.use('/turorials',turorialRouter);
apiRouter.use('/products',productsRouter);
apiRouter.use('/members',memberRouter);
apiRouter.use('/suppliers',supplierRouter);
<<<<<<< Updated upstream
apiRouter.use('/purchase',purchseRouter);
apiRouter.use('/purchaseProducts',purchaseproductsRouter);
=======
apiRouter.use('/purchases',purchaseRouter);
>>>>>>> Stashed changes
module.exports = apiRouter;

