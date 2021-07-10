import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getProducts } from '../../actions/products'
import Product from './Product'
import Car from './Car'
import {ProductsBox, Container, MovieData, MovieDetails, ParkingLot, RedText,
BuyBox, BuyButton, Total, ParkingLine, StoredProducts, Screen, Reference} from './ProductsStyles'
import {getPurchaseLocalStorage} from '../../reducer/reducer'

const Products = (props) => {

    useEffect(() => {
        props.getProducts()
    }, [props])

    const handleBuy =() => {
        var mensaje;
        var opcion = window.confirm(`
        You are about to purchase: 
        ${Object.keys(getPurchaseLocalStorage().extras).map(e => e.concat(' x').concat(getPurchaseLocalStorage().extras[e]))},
        Ticket for Movie Title on the ${getPurchaseLocalStorage().slot} parking lot, 
        for a total of $${getPurchaseLocalStorage().total}.
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
{/*                     <p>field</p> */}
                    <p>Schedule: {getPurchaseLocalStorage().day.concat(', ').concat(getPurchaseLocalStorage().time) || 'Day and time'}</p>

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
                            &nbsp;&nbsp;{getPurchaseLocalStorage().slot !== '' ? <div>Parking Lot:&nbsp;{getPurchaseLocalStorage().slot}</div> :null}
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