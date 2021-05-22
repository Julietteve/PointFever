import styled from 'styled-components/macro';

export const ModalMain = styled.div`
  position:fixed;
  background: white;
  width: 450px;
  height: 400px;
  padding: 2rem;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 350px;
    padding: 3rem;
  }
`;

export const ModalDisplay = styled.div`
  position: fixed;
  z-index:10;
  display: ${(props)=>props.display};
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  
`;

export const CloseIconWrap = styled.div`
  display:flex;
  justify-content:flex-end;
  color: gray;
  cursor: pointer;
  font-size:1.5rem;
`;


