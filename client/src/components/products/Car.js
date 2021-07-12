import React, { useEffect , useState} from 'react';
import { connect } from "react-redux";
import {saveSlot, getProducts} from '../../actions/products'
import {WhiteCar, RedCar, BlackCar} from './carStyles'
import {getPurchaseLocalStorage} from '../../reducer/reducer'

const Car = (props) => {
    const storage = getPurchaseLocalStorage().slot
    const[state, setState] = useState({
        clicked: storage === props.slot ? true : false
    })
    useEffect(() => {  
        setState({
            clicked: storage === props.slot ? true : false
        })
    }, [props.slotSaved, props.slot, storage])

    const handleClick= function(e){
        e.preventDefault()        
        if(storage === props.slot){
            props.saveSlot('')
            setState({
                clicked: storage === props.slot ? true : false
            })
        }
        if(storage !== props.slot){
            props.saveSlot(props.slot)
            setState({
                clicked: storage === props.slot ? true : false
            })
        }
        props.getProducts()
    }
    return(
        <div>
        {state.clicked ? <BlackCar onClick={event => handleClick(event)}><img src="https://res.cloudinary.com/djunuon2e/image/upload/v1625694896/blueCar_anvl0c.png" alt=''/></BlackCar> 
        : props.ocuppied ? <RedCar><img src="https://res.cloudinary.com/djunuon2e/image/upload/v1625694896/redCar_bydkdo.png" alt=''/></RedCar> 
        : <WhiteCar onClick={event => handleClick(event)} ><img src="https://res.cloudinary.com/djunuon2e/image/upload/v1625694896/whiteCar_cafb44.png" alt=''/></WhiteCar>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        slotSaved:state.slot,
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        saveSlot: slot => dispatch(saveSlot(slot)),
    };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Car);