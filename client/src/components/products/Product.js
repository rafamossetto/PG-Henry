import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {addToTotal, substractToTotal } from '../../actions/products'
import {ProductBox, ButtonBox, Button, CounterBox, Counter, TextBox, InfoBox, ImgBox, Price, Text } from './ProductStyles'

const Product = (props) => {
    console.log(props)
    const[state, setState] = useState({
        counter: 0,
    })

    const handleSubtract = function(){
        if (state.counter > 0){
            setState({
                ...state,
                counter: state.counter-1,
                totalPrice: state.totalPrice - props.price
            })
            props.substractToTotal(props.price)
        }
    }
    const handleAdd = function(){
        if (state.counter <= 10){
            setState({
                ...state,
                counter: state.counter+1,                
            })
            props.addToTotal(props.price)
        }
    }
    return(
        <ProductBox>
            <div>
            <InfoBox>
                <div>
                <ImgBox>
                    <img src={props.imgUrl} height='90px' width='65px' alt=''/>
                </ImgBox>
                <TextBox>
                    <Text><p>{props.name}</p></Text>
                    <Text><Price>${props.price}</Price></Text>
                </TextBox>
                </div>
            </InfoBox>
            <ButtonBox>
                <Button onClick={handleSubtract}>-</Button>
                <CounterBox><Counter>{state.counter}</Counter></CounterBox>
                <Button onClick={handleAdd}>+</Button>
            </ButtonBox>
            </div>
        </ProductBox>
    )
}



function mapStateToProps(state) {
    return {

    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        addToTotal: price => dispatch(addToTotal(price)),
        substractToTotal: price => dispatch(substractToTotal(price)),
    };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product);