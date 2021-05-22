import styled from 'styled-components/macro';


export const Category = styled.p`
    @media only screen and (max-width: 768px) {
       font-size:0.8rem;
    }  
`;

export const ReedemButtonContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    position: absolute;
    transition: all 0.3s ease-out;
    bottom:-60px;
    width:100%;
    opacity:0;

    @media only screen and (max-width: 768px) {
        display:none;
    }
`;

export const ReedemIcon = styled.div`
    font-size:1.5rem;
    
`;


export const ReedemButton = styled.button`
    background-color: transparent;
    padding-bottom: 0.5rem;
    padding-top:1rem;
    border: none;
    border-bottom : 1px gray solid;
    cursor: pointer;
    box-sizing: border-box;
    font-size:1.1rem;
    font-family: 'Spartan', sans-serif;
    color: black;

    &:hover {
    font-weight: bolder
    }
`;

export const ReedemButtonMobile = styled.button`
  @media only screen and (min-width:1025px){
        display:none;
    }

  @media only screen and (max-width: 768px) {
    background-color: black;
    text-transform: uppercase;
    border: none;
    box-sizing: border-box;
    font-size:0.8rem;
    font-family: 'Spartan', sans-serif;
    color: white;
    width:100%;
    padding:0.5rem;

    &:focus {
        opacity: 0.8;
    }
  } 

`;

export const BagAvailable = styled.div`
   display: flex;
   justify-content: flex-end;
   opacity: 0;

   p{
       margin-right:.8rem;
   }
    
`;

export const BagAvailableWrapper = styled.div`
  width: 45px;
  height: 45px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div`
    margin: 5%;
    padding: 2rem;
    cursor:pointer;
    position: relative;
    border: 1px #ebe9eb solid;
    transition: all .2s ease-in-out;

    &:hover {
        opacity: 0.8;
        border:none;
    }
    &:hover ${ReedemButtonContainer}{
        opacity:1;
        bottom:0;
    }
    &:hover ${BagAvailable}{
        opacity:1;
    }
    &:hover ${Category}{
        opacity:0;
    }

    @media only screen and (max-width: 768px) {
        padding:0;
        margin:0;
        margin-bottom: 1rem;
        
    &:hover {
        opacity:0.9;
        border:none;
    }
    &:hover ${Category}{
        opacity:1;
    }

    }
`;

export const Wrapper = styled.div`
    @media only screen and (max-width: 768px) {
        padding-left: 2rem
    }
    
`;


export const ProductImage = styled.img`
    width: ${(props)=>props.width};
  

    @media only screen and (max-width: 768px) {
        width:250px;
    }
`;



export const ProductName = styled.h2`
     @media only screen and (max-width: 768px) {
         font-size:1rem;
     }
    
`;



