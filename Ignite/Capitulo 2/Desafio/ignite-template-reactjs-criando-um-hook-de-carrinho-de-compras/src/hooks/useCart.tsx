import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { Product, Stock } from '../types'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productInCartIndex = updatedCart.findIndex(
        product => productId === product.id
      )
      const stock = await api.get(`stock/${productId}`)

      if (productInCartIndex < 0) {
        const apiProducts = await api.get(`products/${productId}`)
        const newProduct = {
          ...apiProducts.data,
          amount: 1
        }
        updatedCart.push(newProduct)
      } else {
        if (updatedCart[productInCartIndex].amount >= stock.data.amount) {
          toast.error('Quantidade solicitada fora de estoque')
          return
        } else {
          ++updatedCart[productInCartIndex].amount
        }
      }

      setCart(updatedCart)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  const removeProduct = (productId: number) => {
    try {
      console.log(productId)
      const productInCart = cart.find(product => product.id === productId)

      if (!productInCart) {
        throw Error()
      } else {
        const updatedCart = cart.filter(product => product.id !== productId)

        setCart(updatedCart)

        localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart))
      }
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  const updateProductAmount = async ({
    productId,
    amount
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) return

      const stock = await api.get(`stock/${productId}`)

      if (amount > stock.data.amount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      const updatedCart = [...cart]
      const productIndex = cart.findIndex(product => product.id === productId)
      updatedCart[productIndex].amount = amount

      setCart(updatedCart)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
