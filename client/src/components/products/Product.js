import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {addToTotal, substractToTotal } from '../../actions/products'


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
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <div>
                <button onClick={handleSubtract}>-</button><p>{state.counter}</p><button onClick={handleAdd}>+</button>
            </div>
        </div>
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