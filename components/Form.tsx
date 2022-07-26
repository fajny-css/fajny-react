/*=============================================== Form ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Mixins from "./Mixins"
import Flexbox from "./Flexbox"
import Button from "./Button"

import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Form = ({
    children,
    buttonPrimary,
    buttonSecondary = undefined,
    buttonSecondaryText = buttonSecondary === "cancel" ? "Cancel" : buttonSecondary === "reset" ? "Reset" : "",
    buttonSecondaryTo,
    onClickSecondary,
    iconLeftPrimary,
    iconRightPrimary,
    iconLeftSecondary,
    iconRightSecondary,
    ...props
}: props) => {
    return (
        <Container {...props}>
            {children}

            {(buttonPrimary || buttonSecondary) && (
                <Flexbox gap="xs" align="center">
                    {buttonPrimary && (
                        <Button type="submit" fajnyIconLeft={iconLeftPrimary} fajnyIconRight={iconRightPrimary}>
                            {buttonPrimary}
                        </Button>
                    )}

                    {buttonSecondary && (
                        <Button
                            type={buttonSecondary === "reset" ? "reset" : buttonSecondaryTo ? undefined : "button"}
                            to={buttonSecondaryTo && buttonSecondaryTo}
                            buttonStyle="text"
                            color="primary"
                            onClick={onClickSecondary}
                            fajnyIconLeft={iconLeftSecondary}
                            fajnyIconRight={iconRightSecondary}
                        >
                            {buttonSecondaryText}
                        </Button>
                    )}
                </Flexbox>
            )}
        </Container>
    )
}

export default Form

/*==================== Types ====================*/

interface props extends React.HTMLAttributes<HTMLFormElement> {
    buttonPrimary?: string
    buttonSecondary?: "cancel" | "reset" | undefined
    buttonSecondaryText?: string
    buttonSecondaryTo?: string
    onClickSecondary?: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconLeftPrimary?: fajnyIconsType
    iconRightPrimary?: fajnyIconsType
    iconLeftSecondary?: fajnyIconsType
    iconRightSecondary?: fajnyIconsType
}

/*==================== Styles ====================*/

const Container = styled.form`
    ${Mixins.Grid({
        $gap: "m",
    })};
`
