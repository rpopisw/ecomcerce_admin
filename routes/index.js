import routerx from 'express-promise-router';
import categoryRouter from './category';
import articuleRouter from './articule'
import userRouter from './user'

const router = routerx();

router.use('/category',categoryRouter)
router.use('/articule',articuleRouter)
router.use('/user',userRouter)

export default router