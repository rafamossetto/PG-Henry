import styled, {css} from 'styled-components';

const desktopStartWidth = 996;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const Box = styled.label`
  display:block;
  width:50em;
  color: #E8E8E8;
  padding-left: 1rem;
  ${mobile}{
      width:100%;
  }
`;

export const Container =styled.div`

      background-color: #222831;
    
    
`;

export const Btn = styled.button`
   color: #222831; 
   background:#F05454;
   border: 3px solid #30475E;
   border-radius: 12px;
   width: 200px;
   height: 50px;
   font-size: 30px;

   &:hover{
   background:#E8E8E8;
   color:#222831;
   border: 3px solid #F05454;
   }
`;

export const Grid = styled.div`
   display:grid;
   grid-template-columns:50% 50%;
   
`;

export const Poster = styled.img`
   margin: auto;
   width: 400px;
   height: 600px;
   padding: 0rem 0.5rem 0.5rem 1.5rem;
`;

export const SubH2 = styled.h2`
   color: #E8E8E8;
   padding-left:1rem;
`;

export const Title = styled.h1`
  margin-top: 200px;
  padding-left: 3rem;
  Color:#E8E8E8;
`;

export const Trailer = styled.div`
   
   margin: 330px 10px 0px -60px;
`;

export const Rated = styled.div`
  display:in-line;
`;