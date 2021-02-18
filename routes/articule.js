import routerx from 'express-promise-router'
import articuleController from '../controllers/articuleController'

const router = routerx()

router.post('/add',articuleController.add)
router.get('/query',articuleController.query)
router.get('/list',articuleController.list)
router.put('/update',articuleController.update)
router.delete('/remove',articuleController.remove)

export default router