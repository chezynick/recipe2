import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Questrial', sans-serif;
    position: relative;
}
a{
    text-decoration:none;
    font-size:large;
    color:#555555;
    display:flex;
    flex-direction:column;
    align-items:center;
}
a:focus{
    text-decoration:none;
    color:#555555;
}
  textarea{
      width:70%;
      outline:none;
    border:2px solid #fb1970;
    height:30px;
    border-radius:0.5rem;
  }  
button {
  padding:0.5rem;
  outline:none;
  border:none;
  border-radius:0.5rem;
  cursor:pointer;
}
`;
export default GlobalStyles;
