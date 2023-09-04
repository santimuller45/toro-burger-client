import { useContext } from "react";
import { ShopContext } from "../context/Shop/shop.jsx";

export const useCart = () => {
    const context = useContext(ShopContext);

    if (context === undefined) throw new Error('Error cart shop');

    return context;
}