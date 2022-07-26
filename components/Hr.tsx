/*=============================================== Hr ===============================================*/

/*==================== Imports ====================*/

import styled from "styled-components"

import Variables from "./Variables"

/*==================== Component ====================*/

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    border: none;
    background-color: ${Variables.Colors.Gray200};
    display: block;
`

export default Hr
