// TODO: create a component that displays a single bakery item
import "./BakeryItem.css"
function BakeryItem(props){
    return(<div>
        <div class="BakeryItem">
            <img src={props.item.image} />
            <h1>{props.item.name}</h1>
            <p>{props.item.description} </p>
            <p>Price:{props.item.price} </p>
            <button onClick={()=> { props.addToCart(props.item)}}>Add To Cart</button>
        </div>

    </div>)
}

export default BakeryItem;
