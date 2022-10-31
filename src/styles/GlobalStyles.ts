import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    body {
	    font-family: Pretendard, sans-serif;
        font-size: 14px;
        color: black;
        background-color: white;
        text-align: center;
    }
`;

export default globalStyles;
