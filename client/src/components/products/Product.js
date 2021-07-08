import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {addToTotal, substractToTotal, saveProduct, deleteProduct } from '../../actions/products'
import {ProductBox, ButtonBox, Button, CounterBox, Counter, TextBox, InfoBox, ImgBox, Price, Text, Center } from './ProductStyles'

const Product = (props) => {
    const[state, setState] = useState({
        counter: 0,
    })

    const handleSubtract = function(){
        console.log(props.state)
        if (state.counter > 0){
            setState({
                ...state,
                counter: state.counter-1,
                totalPrice: state.totalPrice - props.price
            })
            props.substractToTotal(props.price)
            props.deleteProduct(props.name)
        }
    }
    const handleAdd = function(){
        console.log(props.state)
        if (state.counter < 9){
            setState({
                ...state,
                counter: state.counter+1,                
            })
            props.addToTotal(props.price)
            props.saveProduct(props.name)
        }
    }
    return(
        <ProductBox>
            <div>
            <InfoBox>
                <div>
                <ImgBox>
                    <img src={props.imgUrl} height='75px' width='80px' alt=''/>
                </ImgBox>
                <TextBox>
                    <Text><p>{props.name}</p></Text>
                    <Text><Price>${props.price}</Price></Text>
                </TextBox>
                </div>
            </InfoBox>
                <Center>
                    <ButtonBox>
                        <Button onClick={handleSubtract}>-</Button>
                        <CounterBox><Counter>{state.counter}</Counter></CounterBox>
                        <Button onClick={handleAdd}>+</Button>
                    </ButtonBox>
                </Center>
            </div>
        </ProductBox>
    )
}



function mapStateToProps(state) {
    return {
        state: state
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        addToTotal: price => dispatch(addToTotal(price)),
        substractToTotal: price => dispatch(substractToTotal(price)),
        saveProduct: product => dispatch(saveProduct(product)),
        deleteProduct: product => dispatch(deleteProduct(product)),
    };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product);