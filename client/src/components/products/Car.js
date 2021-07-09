import React, { useState } from 'react';
import { connect } from "react-redux";
import {saveSlot} from '../../actions/products'
import {WhiteCar, RedCar, BlackCar} from './carStyles'

const Car = (props) => {
    const[state, setState] = useState({
        clicked:false,
    })
    const handleClick= function(){
        if(props.savedSlot === ''){
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
        : props.ocupied ? <RedCar><img src="https://res.cloudinary.com/djunuon2e/image/upload/v1625694896/redCar_bydkdo.png" alt=''/></RedCar> 
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