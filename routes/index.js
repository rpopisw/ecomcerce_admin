import routerx from 'express-promise-router';
import categoryRouter from './category';
import articuleRouter from './articule'

const router = routerx();

router.use('/category',categoryRouter)
router.use('/articule',articuleRouter)

export default router