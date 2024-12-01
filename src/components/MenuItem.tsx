type Props = {
    item: {
        name: string,
        qty: number,
        
    },
}
const MenuItem = (props: Props) => {
    return(
        <>
        <ul className="text-xl">
            <li className="flex justify-between">
                <h3>{props.item.name}</h3>
                <span>{props.item.qty}</span>
            </li>
        </ul>
    </>
    )
}
export default MenuItem;