import styled from "styled-components";

const StyledDiv = styled.div`
    margin-left: .8em;
    display: flex;
    flex-direction: column;
    
    h4 {
        font-weight: 600;
        font-size: 1.5em;
    }

    .userDiv {
        display: flex;
        justify-content: space-between;
        width: 50%;
        align-items: center;
        color: #ffffff;        
    }
    .userButton {
        border-radius: 15%;
        height: 3em;
        
    }
    `;
export default StyledDiv;