import styled from 'styled-components/macro';

export const HistoryContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding:4rem;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HistoryCard = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding:1rem;

    @media only screen and (max-width: 768px) {
        p{
            font-size: .8rem;
        }
   
  }
`;

export const Card = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    padding:1rem;
    border-bottom: 1px solid lightgray;
`;

export const Date= styled.button`
    border:none;
    background-color:transparent;
    font-family: "Spartan";
    font-size:1.2rem;
    margin: 1rem;
    transition: all 0.3s ease-out;
    padding: 1rem;
    cursor: pointer;


    &:hover{
        background-color:#ebe9eb;
    }

    &:focus{
        background-color:#ebe9eb;
    }

    @media only screen and (max-width: 768px) {
   font-size: .8rem;
  }
`;

export const DateWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-end;
    padding-right:2rem;
    box-sizing: border-box;
`;

export const SplitLine = styled.div`
    width:100%;
    height:2px;
    margin-bottom:2%;
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #F8F8F8;
`;

export const H1History = styled.h1`
@media only screen and (max-width: 768px) {
   font-size: 1rem;
  }
`;

export const ImgHistory = styled.img`
  @media only screen and (max-width: 768px) {
   width: 50%;
   height: 50%;
  }
`;

