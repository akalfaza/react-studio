function CartItem(props){
    return(<div>
        <div class="CartItem">
            <p>{props.CartItem.name}{props.CartItem.price}</p>
        </div>

    </div>)
}

export default BakeryItem;