import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
    const  [firstItem, setFirstItem] = useState({
        name: "Biryani",
        qty: 2
})
    useEffect(() => {
        setTimeout(()=> {
            setFirstItem(item => {
                return {
                 ...item,
                 qty: 10,   
                }
            })
        },3000)
    });
    return (<section className="max-w-md mx-auto">
            <h1>Cart Items</h1>
        <MenuItem item={firstItem} />
        </section>);
}
export default Cart;