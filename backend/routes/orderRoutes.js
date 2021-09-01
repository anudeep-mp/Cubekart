import express from 'express'
import {
  addOrderItems,
  getMyOrders,
  getOrdersforAdmin,
  getOrderbyId,
  updateOrderToPaid,
  updateOrderToDelivered,
} from '../controllers/orderController.js'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, admin, getOrdersforAdmin)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderbyId)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
