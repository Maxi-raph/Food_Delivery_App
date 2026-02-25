import type React from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

type CartItem = {
  id: number;
  name: string;
  price?: number;
  quantity?: number;
  img: string;
  description?: string;
}

type CartContextType = {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  deliveryFee: number;
  subTotalPrice: number;
  serviceFee: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


type CartProviderProps = {
  children: React.ReactNode;
}


export  const CartProvider = ({children}:CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: CartItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === product.id);
      if(existingItem){
        return prevItems.map(prev => prev.id === product.id ? {...prev, quantity: (prev.quantity||0 )+ 1}: prev)
      }
      return [...prevItems,{...product, quantity: 1 }]
        })
    }
    const decreaseQuantity = (id: number) => {
        setItems(prevItems => {
        const existingItem = prevItems.find(i => i.id === id);

        if (existingItem && (existingItem.quantity || 0) <= 1) {
            return prevItems.filter(item => item.id !== id);
        }
        
        return prevItems.map(item => 
            item.id === id 
            ? {...item, quantity: (item.quantity || 0) - 1} 
            : item
        );
        });
    };

    const removeItem = (id: number) => {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    const clearCart = () => {
      setItems([]);
    }
    const subTotalPrice = items.reduce((total, item) => total + (item.price||0) * (item.quantity || 0), 0);
    const deliveryFee = 500
    const serviceFee = 200
    return (
      <CartContext.Provider value={{items, addItem, decreaseQuantity, removeItem, clearCart, subTotalPrice, deliveryFee, serviceFee}}>
        {children}
      </CartContext.Provider>
    )       
}


  export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
      throw new Error("useCart must be used within CartProvider");
    }

    return context;
};