import express from "express"
import cors from "cors"

import voucherRoutes from "./modules/voucher/voucher.routes"

const app = express()

app.use(cors())
app.use(express.json())

// base route
app.get("/", (req, res) => {
  res.json({
    message: "WiFi Voucher API is running 🚀"
  })
})

// voucher routes
app.use("/vouchers", voucherRoutes)

export default app