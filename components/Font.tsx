/*=============================================== Fonts ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { fajnyColorsType, colorsShortType, textAlignType } from "./common-types"

/*==================== Component ====================*/

const H1 = ({ color, display, textAlign, children, ...props }: titlesProps) => (
    <StyledH1 $color={color} $display={display} $textAlign={textAlign} {...props}>
        {children}
    </StyledH1>
)

const H2 = ({ color, display, textAlign, children, ...props }: titlesProps) => (
    <StyledH2 $color={color} $display={display} $textAlign={textAlign} {...props}>
        {children}
    </StyledH2>
)

const H3 = ({ color, display, textAlign, children, ...props }: titlesProps) => (
    <StyledH3 $color={color} $display={display} $textAlign={textAlign} {...props}>
        {children}
    </StyledH3>
)

const H4 = ({ color, display, textAlign, children, ...props }: titlesProps) => (
    <StyledH4 $color={color} $display={display} $textAlign={textAlign} {...props}>
        {children}
    </StyledH4>
)

const H5 = ({ color, display, textAlign, children, ...props }: titlesProps) => (
    <StyledH5 $color={color} $display={display} $textAlign={textAlign} {...props}>
        {children}
    </StyledH5>
)

const H6 = ({ color, textAlign, children, ...props }: h6Props) => (
    <StyledH6 $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledH6>
)

const P = ({ color, textAlign, children, ...props }: paragraphProps) => (
    <StyledP $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledP>
)

const Strong = ({ color, textAlign, children, ...props }: paragraphProps) => (
    <StyledStrong $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledStrong>
)

const Em = ({ color, textAlign, children, ...props }: paragraphProps) => (
    <StyledEm $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledEm>
)

const Small = ({ color, textAlign, children, ...props }: paragraphProps) => (
    <StyledSmall $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledSmall>
)

const Blockquote = ({ color, textAlign, children, ...props }: quoteProps) => (
    <StyledBlockquote $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledBlockquote>
)

const Ul = ({ color, textAlign, children, ...props }: ulProps) => (
    <StyledUl $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledUl>
)

const Ol = ({ color, textAlign, children, ...props }: olProps) => (
    <StyledOl $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledOl>
)

const Dl = ({ color, textAlign, children, ...props }: dlProps) => (
    <StyledDl $color={color} $textAlign={textAlign} {...props}>
        {children}
    </StyledDl>
)

export { H1, H2, H3, H4, H5, H6, P, Strong, Em, Small, Blockquote, Ul, Ol, Dl, FontCommon }

/*==================== Types ====================*/

interface commonStyleProps {
    $textAlign?: textAlignType
    $color?: fajnyColorsType | colorsShortType | string
}

interface titlesStyleProps extends React.HTMLAttributes<HTMLHeadingElement>, commonStyleProps {
    $color?: fajnyColorsType | colorsShortType | string
    $display?: boolean
}

interface h6StyleProps extends React.HTMLAttributes<HTMLHeadingElement>, commonStyleProps {}

interface paragraphStyleProps extends commonStyleProps, React.HTMLAttributes<HTMLParagraphElement> {}

export interface quoteStyleProps extends React.HTMLAttributes<HTMLQuoteElement>, commonStyleProps {}

export interface ulStyleProps extends React.HTMLAttributes<HTMLUListElement>, commonStyleProps {}

export interface olStyleProps extends React.HTMLAttributes<HTMLOListElement>, commonStyleProps {}

export interface dlStyleProps extends React.HTMLAttributes<HTMLDListElement>, commonStyleProps {}

interface commonProps {
    textAlign?: textAlignType
    color?: fajnyColorsType | colorsShortType | string
}

interface titlesProps extends React.HTMLAttributes<HTMLHeadingElement>, commonProps {
    display?: boolean
    color?: fajnyColorsType | colorsShortType | string
}

interface h6Props extends React.HTMLAttributes<HTMLHeadingElement>, commonProps {
    color?: fajnyColorsType | colorsShortType | string
}

interface paragraphProps extends commonProps, React.HTMLAttributes<HTMLParagraphElement> {
    color?: fajnyColorsType | colorsShortType | string
}

interface quoteProps extends React.HTMLAttributes<HTMLQuoteElement>, commonProps {
    color?: fajnyColorsType | colorsShortType | string
}

interface ulProps extends React.HTMLAttributes<HTMLUListElement>, commonProps {
    color?: fajnyColorsType | colorsShortType | string
}

interface olProps extends React.HTMLAttributes<HTMLOListElement>, commonProps {
    color?: fajnyColorsType | colorsShortType | string
}

interface dlProps extends React.HTMLAttributes<HTMLDListElement>, commonProps {
    color?: fajnyColorsType | colorsShortType | string
}

/*==================== Styles ====================*/

const FontCommon = ({ $color, $textAlign }: commonStyleProps) => css`
    text-align: ${$textAlign};
    color: ${Mixins.AllColors};

    & > * {
        color: ${Mixins.AllColors};
    }

    a {
        color: ${$color === "white" ? Variables.Colors.White : Variables.Colors.Primary500};
        text-decoration: none;

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                color: ${$color === "white" ? Variables.Colors.Gray300 : Variables.Colors.Primary300};
            }

            &:active {
                color: ${$color === "white" ? Variables.Colors.Gray100 : Variables.Colors.Primary600};
            }
        }
    }

    code {
        font-family: ${Variables.FontFamilies.Code};
        line-height: ${Variables.LineHeights.Code};
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Spacers.XXS};
        border-radius: ${Variables.Radiuses.XS};
        background-color: ${Variables.Colors.Gray50};
    }
`

const StyledH1 = styled.h1<titlesStyleProps>(({ $display }) => ({
    ...FontCommon,
    fontWeight: Variables.FontWeights.Black,
    fontSize: $display ? Variables.FontSizes.Displays.H1 : Variables.FontSizes.Titles.H1,

    " > *": {
        fontSize: $display ? Variables.FontSizes.Displays.H1 : Variables.FontSizes.Titles.H1,
    },
}))

const StyledH2 = styled.h2<titlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H2 : Variables.FontSizes.Titles.H2)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H2 : Variables.FontSizes.Titles.H2)};
    }
`

const StyledH3 = styled.h3<titlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H3 : Variables.FontSizes.Titles.H3)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H3 : Variables.FontSizes.Titles.H3)};
    }
`

const StyledH4 = styled.h4<titlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H4 : Variables.FontSizes.Titles.H4)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H4 : Variables.FontSizes.Titles.H4)};
    }
`

const StyledH5 = styled.h5<titlesStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H5 : Variables.FontSizes.Titles.H5)};

    & > * {
        font-size: ${({ $display }) => ($display ? Variables.FontSizes.Displays.H5 : Variables.FontSizes.Titles.H5)};
    }
`

const StyledH6 = styled.h6<h6StyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${Variables.FontSizes.Titles.H6};

    & > * {
        font-size: ${Variables.FontSizes.Titles.H6};
    }
`

const StyledP = styled.p<paragraphStyleProps>`
    ${FontCommon};
    font-size: ${Variables.FontSizes.Body};

    & > * {
        font-size: ${Variables.FontSizes.Body};
    }
`

const StyledStrong = styled.strong<paragraphStyleProps>`
    ${FontCommon};
    font-weight: ${Variables.FontWeights.Black};
`

const StyledEm = styled.em<paragraphStyleProps>`
    ${FontCommon};
    font-style: italic;
`

const StyledSmall = styled.small<paragraphStyleProps>`
    ${FontCommon};
    font-size: ${Variables.FontSizes.Small};

    & > * {
        font-size: ${Variables.FontSizes.Small};
    }
`

const StyledBlockquote = styled.blockquote<quoteStyleProps>`
    ${FontCommon};
    font-size: ${Variables.FontSizes.Titles.H6};
    font-style: italic;
`

const StyledUl = styled.ul<ulStyleProps>`
    ${FontCommon};
    padding: 0;
    margin: 0;
    font-size: ${Variables.FontSizes.Body};
    padding-left: ${Variables.Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};

    li {
        padding-inline-start: ${Variables.Spacers.XXS};
        line-height: ${Variables.LineHeights.Regular};
    }
`

const StyledOl = styled.ol<olStyleProps>`
    ${FontCommon};
    padding: 0;
    margin: 0;
    font-size: ${Variables.FontSizes.Body};
    padding-left: ${Variables.Spacers.S};
    ${Mixins.Grid({
        $gap: "xxs",
    })};

    li {
        padding-inline-start: ${Variables.Spacers.XXS};
        line-height: ${Variables.LineHeights.Regular};
    }
`

const StyledDl = styled.dl<dlStyleProps>`
    ${FontCommon};

    dt {
        font-weight: ${Variables.FontWeights.Black};
    }

    dd {
        padding-inline-start: ${Variables.Spacers.M};

        &:not(:last-of-type) {
            margin-bottom: ${Variables.Spacers.XS};
        }
    }
`
