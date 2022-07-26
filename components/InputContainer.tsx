/*=============================================== InputContainer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import { P, Small } from "./Font"

/*==================== Component ====================*/

const InputContainer = ({ label, helper, helperBottom, counter, maxLength, value, children, id }: props) => {
    return (
        <Container>
            {label && <Label htmlFor={id}>{label}</Label>}

            {helper && <P>{helper}</P>}

            {children}

            {helperBottom && <Small>{helperBottom}</Small>}

            {counter && typeof value === "string" && (
                <Small color="gray-500">
                    {value.length}
                    {maxLength ? ` / ${maxLength}` : ""}
                </Small>
            )}
        </Container>
    )
}

export default InputContainer

/*==================== Types ====================*/

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
    helper?: string
    helperBottom?: string
    counter?: boolean
    maxLength?: number
    value?: any
    id: string
}

/*==================== Styles ====================*/

const Container = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })};
`

const Label = styled.label`
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Black};
`
