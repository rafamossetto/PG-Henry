import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getProducts } from '../../actions/products'
import Product from './Product'
import {ProductsBox, Container, MovieData, MovieDetails, ParkingLot, RedText, BuyBox, BuyButton} from './ProductsStyles'
const Products = (props) => {

    useEffect(() => props.getProducts(), [])

    return(
        <Container>

            <MovieData> 
                <MovieDetails>
                    <h3>Movie Title</h3>
                    <p>field</p>
                    <p>Time</p>
                    <p>Date</p>
                    <p>Price</p>
                </MovieDetails>
                <div>
                    <RedText>Select your parking lot</RedText>
                    <ParkingLot>                    
                        <div>Parking Lot</div>
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
                    <p>Total: ${props.total}</p>
                    <BuyButton>Buy</BuyButton>
                </BuyBox>
            </div>

        </Container>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products,
        total: state.total
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