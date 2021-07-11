import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getProducts } from '../../actions/products'
import Product from './Product'
import Car from './Car'
import {ProductsBox, Container, MovieData, MovieDetails, ParkingLot, RedText,
BuyBox, BuyButton, Total, ParkingLine, StoredProducts, Screen, Reference} from './ProductsStyles'
import {getPurchaseLocalStorage} from '../../reducer/reducer'

const Products = (props) => {
    const purchaseStore = getPurchaseLocalStorage()
    useEffect(() => {
        props.getProducts()
    }, [])

    const handleBuy =(e) => {
        e.preventDefault()
        props.getProducts()
        var mensaje;
        var opcion = window.confirm(`
        You are about to purchase: 
        ${Object.keys(purchaseStore.extras).map(e => e.concat(' x').concat(purchaseStore.extras[e]))},
        Ticket for Movie Title on the ${purchaseStore.slot} parking lot, 
        for a total of $${purchaseStore.total}.
        `);
        if (opcion === true) {
            mensaje = "Purchase confirmed";
	    } else {
	        mensaje = "Purchase canceled";
	    }
	    document.getElementById("purchase").innerHTML = mensaje;
    }
    
    return(
        <div>
        {purchaseStore ? <Container>

            <MovieData> 
                <MovieDetails>
                    <h3>{purchaseStore.title || 'Title'}</h3>
{/*                     <p>field</p> */}
                    <p>Schedule: {purchaseStore.day.concat(', ').concat(purchaseStore.time) || 'Day and time'}</p>

                    <p>Price:${purchaseStore.price || 'Price'}</p>
                </MovieDetails>
                <div>
                    <RedText>Select your parking lot</RedText>
                    {purchaseStore.parking ? 
                    <ParkingLot className="parkingLot">  
                    <ParkingLine> 
                            {purchaseStore.parking.slice(20,30).map(e => <Car key={e.slot} slot={e.slot} ocuppied={e.ocuppied}/>)}
                        </ParkingLine>
                        <ParkingLine> 
                            {purchaseStore.parking.slice(10,20).map(e => <Car key={e.slot} slot={e.slot} ocuppied={e.ocuppied}/>)}
                        </ParkingLine>                         
                        <ParkingLine>                 
                            {purchaseStore.parking.slice(0,10).map(e => <Car key={e.slot} slot={e.slot} ocuppied={e.ocuppied}/>)}
                        </ParkingLine> 
                        <Screen><div>Screen</div></Screen>
                        <Reference>                            
                            <img src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/redCar_bydkdo.png" alt=''/>
                            <div>Ocuppied</div>
                            <img src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/whiteCar_cafb44.png" alt=''/>
                            <div>Available</div>
                            <img src="https://res.cloudinary.com/djunuon2e/image/upload/c_scale,h_40/v1625694896/blueCar_anvl0c.png" alt=''/>
                            <div>Selected</div>
                            &nbsp;&nbsp;{purchaseStore.slot !== '' ? <div>Parking Lot:&nbsp;{purchaseStore.slot}</div> :null}
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
                    <Product key={e.name} name={e.name} price={e.price} imgUrl={e.imgUrl}/>
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
                    <Product key={e.name} name={e.name} price={e.price} imgUrl={e.imgUrl}/>
                    )}
                </ProductsBox>                    
                </div>                
            </div>
            
            <div>
                <RedText>* You can choose sweet or salty popcorn once you get there!</RedText>
                <p id="purchase"></p>
                <BuyBox>                    
                    {purchaseStore.extras && Object.keys(purchaseStore.extras).length > 0 && <StoredProducts>Extras:</StoredProducts>}
                    {purchaseStore.extras && Object.keys(purchaseStore.extras).map(e =><StoredProducts>{e}&nbsp;x&nbsp;{purchaseStore.extras[e]}&nbsp;-</StoredProducts>)}
                    
                    <Total>Total: ${purchaseStore.total}</Total>
                    <BuyButton onClick={event => handleBuy(event)}>Buy</BuyButton>
                </BuyBox>
            </div>
        </Container> : <h1>There is nothing in your cart!</h1>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products,
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