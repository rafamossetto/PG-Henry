import React, { useState } from 'react';
import { connect } from "react-redux";
import {addToTotal, substractToTotal, saveProduct, deleteProduct } from '../../actions/products'
import {ProductBox, ButtonBox, Button, CounterBox, Counter, TextBox, InfoBox, ImgBox, Price, Text, Center } from './ProductStyles'

const Product = (props) => {
    console.log(props.counter)
    const[state, setState] = useState({
        counter: props.counter.hasOwnProperty(props.name) ? props.counter[props.name] : 0,
    })

    const handleSubtract = function(e){
        e.preventDefault()
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
    const handleAdd = function(e){
        e.preventDefault(e)
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
                    <img src={props.imgUrl} height='150px' width='160px' alt=''/>
                </ImgBox>
                <TextBox>
                    <Text><p>{props.name}</p></Text>
                    <Text><Price>${props.price}</Price></Text>
                </TextBox>
                </div>
            </InfoBox>
                <Center>
                    <ButtonBox>
                        <Button onClick={event => handleSubtract(event)}>-</Button>
                        <CounterBox><Counter>{state.counter}</Counter></CounterBox>
                        <Button onClick={event => handleAdd(event)}>+</Button>
                    </ButtonBox>
                </Center>
            </div>
        </ProductBox>
    )
}



function mapStateToProps(state) {
    return {
        counter: state.purchase.extras
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