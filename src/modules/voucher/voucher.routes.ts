import { Router } from "express"

const router = Router()

/**
 * TEST ROUTE (first module route)
 */
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Voucher module is working 🎟️"
  })
})

export default router