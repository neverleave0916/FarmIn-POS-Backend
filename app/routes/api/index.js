const apiRouter = require('express').Router();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

//放在此目錄下的檔案將會自動import
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    const name = '/'+path.parse(file).name
    apiRouter.use(name,model);
  });




  
// const productsRouter = require('./products');
// const product_categoryRouter = require('./product_categories');
// const harvestRouter = require('./harvests');
// const transactionRouter = require('./transactions')
// const supplierRouter = require('./suppliers')


// apiRouter.use('/products',productsRouter);
// apiRouter.use('/product_categories',product_categoryRouter);
// apiRouter.use('/harvests',harvestRouter);
// apiRouter.use('/transactions',transactionRouter);
// apiRouter.use('/suppliers',supplierRouter);







  //apiRouter.use('/products',require('./products'));

// const published_statusRouter = require('./published_status');

// const turorialRouter = require('./turorials');
// const memberRouter = require('./members');
// const supplierRouter = require('./suppliers');

// const purchaseRouter = require('./purchase');
// const purchase_p_productRouter = require('./purchase_participate_product');

// const userRouter = require('./user');


// const harvest_p_productRouter = require('./harvest_participate_product');

// const adjustRouter = require('./adjust');
// const adjust_p_productRouter = require('./adjust_participate_product');

// const disposeRouter = require('./dispose');
// const dispose_p_productRouter = require('./dispose_participate_product');

//apiRouter.get("/turorials", tutorialsa.findAll);
//router.use('/products', products);
//router.use('/turorials',turorials);



// apiRouter.use('/published_status',published_statusRouter);

// apiRouter.use('/members',memberRouter);
// apiRouter.use('/suppliers',supplierRouter);

// apiRouter.use('/purchases',purchaseRouter);
// apiRouter.use('/purchase_p_products',purchase_p_productRouter);


// apiRouter.use('/harvest_p_products',harvest_p_productRouter);

// apiRouter.use('/disposes',disposeRouter);
// apiRouter.use('/dispose_p_products',dispose_p_productRouter);

// apiRouter.use('/adjusts',adjustRouter);
// apiRouter.use('/adjust_p_products',adjust_p_productRouter);

// apiRouter.use('/users',userRouter);

module.exports = apiRouter;

