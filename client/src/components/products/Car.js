import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {saveSlot} from '../../actions/products'
import {WhiteCar, RedCar, BlackCar} from './carStyles'
import {getPurchaseLocalStorage} from '../../reducer/reducer'

const Car = (props) => {
    const[state, setState] = useState({
        clicked:props.slot === getPurchaseLocalStorage().slot ? true : false,
    })
    let storage = getPurchaseLocalStorage()
    useEffect(() => {        
        setState({
            ...state,
            clicked:props.slot === getPurchaseLocalStorage().slot ? true : false,
        })
    }, [storage, props.slot, state])

    const handleClick= function(){
        if(getPurchaseLocalStorage().slot !== props.slot){
            props.saveSlot(props.slot)
            setState({
                ...state,
                clicked:!state.clicked,
            })
            return
        }
        else if(props.savedSlot === props.slot){
            props.saveSlot('')
            setState({
                ...state,
                clicked:!state.clicked,
            })
        }
        
    }
    return(
        <div>
        {state.clicked ? <BlackCar onClick={handleClick}><img src="https://res.cloudinary.com/djunuon2e/image/upload/v1625694896/blueCar_anvl0c.png" alt=''/></BlackCar> 
        : props.ocuppied ? <RedCar><img src="https://res.cloudinary.com/djunuon2e/image/upload/v1625694896/redCar_bydkdo.png" alt=''/></RedCar> 
        : <WhiteCar onClick={handleClick}><img src="https://res.cloudinary.com/djunuon2e/image/upload/v1625694896/whiteCar_cafb44.png" alt=''/> </WhiteCar>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        savedSlot:state.purchase.slot
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        saveSlot: slot => dispatch(saveSlot(slot)),
    };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Car);