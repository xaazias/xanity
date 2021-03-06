import { Product } from "src/products/interfaces/product.interface"

export interface Order {
  userId: string
  products: Product[]
  time: number
  customer: string
  phone: string
  city: string
  address: string
  payment: string
  interval: string
  status: string
}
