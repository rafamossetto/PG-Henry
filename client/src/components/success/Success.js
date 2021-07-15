import React, { useEffect } from 'react';
import {updateStatus} from '../../actions/products'

const Success = (props) => {

    const queryString = props.location.search.substr(1)
    let queryArr = queryString.split('&')
    let queryArr2 = queryArr.map( e => e.split('=') )
    const status = queryArr2.filter(e => e[0] === 'collection_status')[0][1]
    const preference_id = queryArr2.filter(e => e[0] === 'preference_id')[0][1]

    console.log(status)
    console.log(preference_id)
    /* const UserId = props.match.params.id */

    useEffect(() => {
        updateStatus({status, preference_id})
    }, [status, preference_id])
    return (
        <div>
            <h3>Payment Aproved</h3>
        </div>
    )
}


export default Success;
