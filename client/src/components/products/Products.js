import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getProducts } from '../../actions/products'
import Product from './Product'
import Car from './Car'
import {ProductsBox, Container, MovieData, MovieDetails, ParkingLot, RedText, BuyBox, BuyButton, Total, ParkingLine, StoredProducts} from './ProductsStyles'
const Products = (props) => {

    let Parking = [
        {slot: 'a1', ocupied:false}, {slot: 'a2', ocupied:true}, {slot: 'a3', ocupied:true}, {slot: 'a4', ocupied:false}, {slot: 'a5', ocupied:false},
        {slot: 'a6', ocupied:false}, {slot: 'a7', ocupied:true}, {slot: 'a8', ocupied:true}, {slot: 'a9', ocupied:false}, {slot: 'a10', ocupied:false},
        {slot: 'b1', ocupied:false}, {slot: 'b2', ocupied:true}, {slot: 'b3', ocupied:true}, {slot: 'b4', ocupied:false}, {slot: 'b5', ocupied:false},
        {slot: 'b6', ocupied:false}, {slot: 'b7', ocupied:true}, {slot: 'b8', ocupied:true}, {slot: 'b9', ocupied:false}, {slot: 'b10', ocupied:false},
        {slot: 'c1', ocupied:false}, {slot: 'c2', ocupied:true}, {slot: 'c3', ocupied:true}, {slot: 'c4', ocupied:false}, {slot: 'c5', ocupied:false},
        {slot: 'c6', ocupied:false}, {slot: 'c7', ocupied:true}, {slot: 'c8', ocupied:true}, {slot: 'c9', ocupied:false}, {slot: 'c10', ocupied:false},
    ]
    useEffect(() => props.getProducts(), [])

    const handleBuy =() => {
        var mensaje;
        var opcion = window.confirm(`
        You are about to purchase: 
        ${Object.keys(props.extras).map(e => e.concat(' x').concat(props.extras[e]))} 
        Ticket for Movie Title on the ${props.savedSlot} parking lot, 
        for a total of $${props.total}`);
        if (opcion == true) {
            mensaje = "Has confirmado la compra";
	    } else {
	        mensaje = "Has cancelado la compra";
	    }
	    document.getElementById("ejemplo").innerHTML = mensaje;
    }
    return(
        <Container>

            <MovieData> 
                <MovieDetails>
                    <h3>{props.movie.title || 'Title'}</h3>
                    <p>field</p>
                    <p>Time</p>
                    <p>Date</p>
                    <p>Price</p>
                </MovieDetails>
                <div>
                    <RedText>Select your parking lot</RedText>
                    <ParkingLot>  
                        <ParkingLine>                 
                            {Parking.slice(0,10).map(e => <Car slot={e.slot}ocupied={e.ocupied}/>)}
                        </ParkingLine> 
                        <ParkingLine> 
                            {Parking.slice(10,20).map(e => <Car slot={e.slot}ocupied={e.ocupied}/>)}
                        </ParkingLine> 
                        <ParkingLine> 
                            {Parking.slice(20,30).map(e => <Car slot={e.slot}ocupied={e.ocupied}/>)}
                        </ParkingLine>
                    </ParkingLot>
                </div>
            </MovieData>

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
                <RedText>* You can choose sweet or salty once you get there!</RedText>
                <BuyBox>
                    <p id="ejemplo"></p>
                    {Object.keys(props.extras).length > 0 && <StoredProducts>Extras:</StoredProducts>}
                    {Object.keys(props.extras).map(e =><StoredProducts>{e}&nbsp;x&nbsp;{props.extras[e]}&nbsp;-</StoredProducts>)}
                    {props.savedSlot !== '' ? <StoredProducts>Parking Lot:&nbsp;{props.savedSlot}</StoredProducts> :null}
                    <Total>Total: ${props.total}</Total>
                    <BuyButton onClick={handleBuy}>Buy</BuyButton>
                </BuyBox>
            </div>

        </Container>
    )
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail,
        products: state.products,
        total: state.purchase.total,
        extras: state.purchase.extras,
        savedSlot: state.purchase.slot
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