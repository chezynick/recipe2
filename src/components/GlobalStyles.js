import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
*{
    margin:0;
    padding:0;
    
    box-sizing:border-box;
    font-family: 'Questrial', sans-serif;
    color:#555555;

}
a{
    text-decoration:none;
    font-size:large;
    color:#555555;
}
a:focus{
    text-decoration:none;
    color:#555555;
}
    

`;
export default GlobalStyles;
