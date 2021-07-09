import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getProducts } from '../../actions/products'
import Product from './Product'
import Car from './Car'
import {ProductsBox, Container, MovieData, MovieDetails, ParkingLot, RedText,
BuyBox, BuyButton, Total, ParkingLine, StoredProducts, Screen, Reference} from './ProductsStyles'
import {getPurchaseLocalStorage} from '../../reducer/reducer'

const Products = (props) => {

    /* let Parking = [
        {slot: 'a1', ocupied:false}, {slot: 'a2', ocupied:true}, {slot: 'a3', ocupied:true}, {slot: 'a4', ocupied:true}, {slot: 'a5', ocupied:false},
        {slot: 'a6', ocupied:true}, {slot: 'a7', ocupied:false}, {slot: 'a8', ocupied:true}, {slot: 'a9', ocupied:true}, {slot: 'a10', ocupied:false},
        {slot: 'b1', ocupied:false}, {slot: 'b2', ocupied:false}, {slot: 'b3', ocupied:false}, {slot: 'b4', ocupied:false}, {slot: 'b5', ocupied:false},
        {slot: 'b6', ocupied:true}, {slot: 'b7', ocupied:true}, {slot: 'b8', ocupied:false}, {slot: 'b9', ocupied:true}, {slot: 'b10', ocupied:false},
        {slot: 'c1', ocupied:false}, {slot: 'c2', ocupied:false}, {slot: 'c3', ocupied:true}, {slot: 'c4', ocupied:false}, {slot: 'c5', ocupied:true},
        {slot: 'c6', ocupied:false}, {slot: 'c7', ocupied:false}, {slot: 'c8', ocupied:false}, {slot: 'c9', ocupied:true}, {slot: 'c10', ocupied:false},
    ] */
    useEffect(() => {
        props.getProducts()

    }, [props])

    const handleBuy =() => {
        var mensaje;
        var opcion = window.confirm(`
        You are about to purchase: 
        ${Object.keys(props.extras).map(e => e.concat(' x').concat(props.extras[e]))},
        Ticket for Movie Title on the ${props.savedSlot} parking lot, 
        for a total of $${props.total}.
        `);
        if (opcion === true) {
            mensaje = "Purchase confirmed";
	    } else {
	        mensaje = "Purchase canceled";
	    }
	    document.getElementById("purchase").innerHTML = mensaje;
    }
    
    return(
        <Container>

            <MovieData> 
                <MovieDetails>
                    <h3>{getPurchaseLocalStorage().title || 'Title'}</h3>
                    <p>field</p>
                    <p>Time: {getPurchaseLocalStorage().time || 'Time'}</p>
                    <p>Day: {getPurchaseLocalStorage().day || 'Day'}</p>
                    <p>Price:${getPurchaseLocalStorage().price || 'Price'}</p>
                </MovieDetails>
                <div>
                    <RedText>Select your parking lot</RedText>
                    {getPurchaseLocalStorage().parking ? 
                    <ParkingLot>  
                    <ParkingLine> 
                            {getPurchaseLocalStorage().parking.slice(20,30).map(e => <Car slot={e.slot} ocuppied={e.ocuppied}/>)}
                        </ParkingLine>
                        <ParkingLine> 
                            {getPurchaseLocalStorage().parking.slice(10,20).map(e => <Car slot={e.slot} ocuppied={e.ocuppied}/>)}
                        </ParkingLine>                         
                        <ParkingLine>                 
                            {getPurchaseLocalStorage().parking.slice(0,10).map(e => <Car slot={e.slot} ocuppied={e.ocuppied}/>)}
                        </ParkingLine> 
                        <Screen><div>Screen</div></Screen>
                        <Reference>                            
                            <img src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/redCar_bydkdo.png" alt=''/>
                            <div>Ocuppied</div>
                            <img src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/whiteCar_cafb44.png" alt=''/>
                            <div>Available</div>
                            <img src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/blueCar_anvl0c.png" alt=''/>
                            <div>Selected</div>
                        </Reference>
                    </ParkingLot> 
                    :
                    <h1>ParkingLot</h1>
                    }
                </div>
            </MovieData>

            <div>
                <div>
                    <RedText>Extras</RedText>
                </div>
                <ProductsBox>
                    {props.products && props.products.filter(e => e.combo === false).map(e => 
                    <Product name={e.name} price={e.price} imgUrl={e.imgUrl}/>
                    )}
                </ProductsBox>                
            </div>

            <div>
                <div>
                    <RedText>Combos</RedText>
                </div>
                <div>
                <ProductsBox>
                    {props.products && props.products.filter(e => e.combo === true).map(e => 
                    <Product name={e.name} price={e.price} imgUrl={e.imgUrl}/>
                    )}
                </ProductsBox>                    
                </div>                
            </div>
            
            <div>
                <RedText>* You can choose sweet or salty popcorn once you get there!</RedText>
                <p id="purchase"></p>
                <BuyBox>                    
                    {getPurchaseLocalStorage().extras && Object.keys(getPurchaseLocalStorage().extras).length > 0 && <StoredProducts>Extras:</StoredProducts>}
                    {getPurchaseLocalStorage().extras && Object.keys(getPurchaseLocalStorage().extras).map(e =><StoredProducts>{e}&nbsp;x&nbsp;{getPurchaseLocalStorage().extras[e]}&nbsp;-</StoredProducts>)}
                    {getPurchaseLocalStorage().slot !== '' ? <StoredProducts>Parking Lot:&nbsp;{getPurchaseLocalStorage().slot}</StoredProducts> :null}
                    <Total>Total: ${getPurchaseLocalStorage().total}</Total>
                    <BuyButton onClick={handleBuy}>Buy</BuyButton>
                </BuyBox>
            </div>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products,
        total: state.purchase.total,
        extras: state.purchase.extras,
        savedSlot: state.purchase.slot,
        parking: state.purchase.parking,
        title:state.purchase.title,
        price:state.purchase.price,
        day:state.purchase.day,
        time:state.purchase.time

    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
    };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products);