/*=============================================== CodeContainer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"

/*==================== Component ====================*/

const CodeContainer = ({ children, ...props }: props) => (
    <Container {...props}>
        <pre>
            <code>{children}</code>
        </pre>
    </Container>
)

export default CodeContainer

/*==================== Types ====================*/

interface props extends React.HTMLAttributes<HTMLDivElement> {
    children: string | React.ReactNode | React.ReactNode[]
}

/*==================== Styles ====================*/

const Container = styled.div`
    width: 100%;
    overflow-x: scroll;
    background-color: ${Variables.Colors.Gray900};
    color: ${Variables.Colors.White};
    padding: ${Variables.Spacers.M};
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    pre,
    code {
        -ms-overflow-style: none;
        scrollbar-width: none;
        white-space: pre;
        
        &::-webkit-scrollbar {
            display: none;
        }
    }

    code {
        font-family: ${Variables.FontFamilies.Code};
    }
`
