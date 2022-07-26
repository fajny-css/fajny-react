/*=============================================== Mixins ===============================================*/

import { css } from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"

import {
    spacersType,
    gridJustifyItemsType,
    gridAlignItemsType,
    gridJustifyContentType,
    gridAlignContentType,
    fajnyColorsType,
    colorsShortType,
    colorsHoverType,
    flexDirectionType,
    flexWrapType,
    flexJustifyType,
    flexAlignType,
} from "./common-types"

/*==================== Types ====================*/

/*==== Fajny Colors ====*/

interface fajnyColorsProps {
    $color?: fajnyColorsType | colorsShortType | string
}

/*==== Colors short ====*/

interface colorsShortProps {
    $color?: fajnyColorsType | colorsShortType | string
}

/*==== All colors ====*/

interface allColorsProps {
    $color?: fajnyColorsType | colorsShortType | string
}

/*==== Colors hover ====*/

interface colorsHoverProps {
    $color?: colorsHoverType
    $property?: string
}

/*==== Grid ====*/

interface gridProps {
    $inline?: boolean
    $col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | string
    $gap?: spacersType | number
    $columnGap?: spacersType | number
    $rowGap?: spacersType | number
    $justifyItems?: gridJustifyItemsType
    $alignItems?: gridAlignItemsType
    $justifyContent?: gridJustifyContentType
    $alignContent?: gridAlignContentType
    $padding?: number | string
}

/*==== Flexbox ====*/

interface flexboxProps {
    $inline?: boolean
    $direction?: flexDirectionType
    $wrap?: flexWrapType
    $justify?: flexJustifyType
    $align?: flexAlignType
    $gap?: spacersType | number | string
    $rowGap?: spacersType | number
    $columnGap?: spacersType | number
}

/*==== Icon ====*/

interface iconProps {
    $name: string
    $size?: number
    $color?: colorsShortType | fajnyColorsType | string
}

/*==================== Mixins ====================*/

const Mixins = {
    FajnyColors: ({ $color }: fajnyColorsProps) => css`
        ${$color === "black"
            ? Variables.Colors.Black
            : $color === "white"
            ? Variables.Colors.White
            : $color === "gray-50"
            ? Variables.Colors.Gray50
            : $color === "gray-100"
            ? Variables.Colors.Gray100
            : $color === "gray-200"
            ? Variables.Colors.Gray200
            : $color === "gray-300"
            ? Variables.Colors.Gray300
            : $color === "gray-400"
            ? Variables.Colors.Gray400
            : $color === "gray-500"
            ? Variables.Colors.Gray500
            : $color === "gray-600"
            ? Variables.Colors.Gray600
            : $color === "gray-700"
            ? Variables.Colors.Gray700
            : $color === "gray-800"
            ? Variables.Colors.Gray800
            : $color === "gray-900"
            ? Variables.Colors.Gray900
            : $color === "primary-50"
            ? Variables.Colors.Primary50
            : $color === "primary-100"
            ? Variables.Colors.Primary100
            : $color === "primary-200"
            ? Variables.Colors.Primary200
            : $color === "primary-300"
            ? Variables.Colors.Primary300
            : $color === "primary-400"
            ? Variables.Colors.Primary400
            : $color === "primary-500"
            ? Variables.Colors.Primary500
            : $color === "primary-600"
            ? Variables.Colors.Primary600
            : $color === "primary-700"
            ? Variables.Colors.Primary700
            : $color === "primary-800"
            ? Variables.Colors.Primary800
            : $color === "primary-900"
            ? Variables.Colors.Primary900
            : $color === "secondary-50"
            ? Variables.Colors.Secondary50
            : $color === "secondary-100"
            ? Variables.Colors.Secondary100
            : $color === "secondary-200"
            ? Variables.Colors.Secondary200
            : $color === "secondary-300"
            ? Variables.Colors.Secondary300
            : $color === "secondary-400"
            ? Variables.Colors.Secondary400
            : $color === "secondary-500"
            ? Variables.Colors.Secondary500
            : $color === "secondary-600"
            ? Variables.Colors.Secondary600
            : $color === "secondary-700"
            ? Variables.Colors.Secondary700
            : $color === "secondary-800"
            ? Variables.Colors.Secondary800
            : $color === "secondary-900"
            ? Variables.Colors.Secondary900
            : $color === "success-50"
            ? Variables.Colors.Success50
            : $color === "success-100"
            ? Variables.Colors.Success100
            : $color === "success-200"
            ? Variables.Colors.Success200
            : $color === "success-300"
            ? Variables.Colors.Success300
            : $color === "success-400"
            ? Variables.Colors.Success400
            : $color === "success-500"
            ? Variables.Colors.Success500
            : $color === "success-600"
            ? Variables.Colors.Success600
            : $color === "success-700"
            ? Variables.Colors.Success700
            : $color === "success-800"
            ? Variables.Colors.Success800
            : $color === "success-900"
            ? Variables.Colors.Success900
            : $color === "danger-50"
            ? Variables.Colors.Danger50
            : $color === "danger-100"
            ? Variables.Colors.Danger100
            : $color === "danger-200"
            ? Variables.Colors.Danger200
            : $color === "danger-300"
            ? Variables.Colors.Danger300
            : $color === "danger-400"
            ? Variables.Colors.Danger400
            : $color === "danger-500"
            ? Variables.Colors.Danger500
            : $color === "danger-600"
            ? Variables.Colors.Danger600
            : $color === "danger-700"
            ? Variables.Colors.Danger700
            : $color === "danger-800"
            ? Variables.Colors.Danger800
            : $color === "danger-900"
            ? Variables.Colors.Danger900
            : $color === "warning-50"
            ? Variables.Colors.Warning50
            : $color === "warning-100"
            ? Variables.Colors.Warning100
            : $color === "warning-200"
            ? Variables.Colors.Warning200
            : $color === "warning-300"
            ? Variables.Colors.Warning300
            : $color === "warning-400"
            ? Variables.Colors.Warning400
            : $color === "warning-500"
            ? Variables.Colors.Warning500
            : $color === "warning-600"
            ? Variables.Colors.Warning600
            : $color === "warning-700"
            ? Variables.Colors.Warning700
            : $color === "warning-800"
            ? Variables.Colors.Warning800
            : $color === "warning-900"
            ? Variables.Colors.Warning900
            : $color === "primary"
            ? Variables.Colors.Primary500
            : $color === "secondary"
            ? Variables.Colors.Secondary500
            : $color === "success"
            ? Variables.Colors.Success500
            : $color === "danger"
            ? Variables.Colors.Danger500
            : $color === "warning"
            ? Variables.Colors.Warning500
            : $color === "gray"
            ? Variables.Colors.Gray500
            : $color
            ? $color
            : ""};
    `,

    ColorsShort: ({ $color }: colorsShortProps) => css`
        ${$color === "primary"
            ? Variables.Colors.Primary500
            : $color === "secondary"
            ? Variables.Colors.Secondary500
            : $color === "success"
            ? Variables.Colors.Success500
            : $color === "danger"
            ? Variables.Colors.Danger500
            : $color === "warning"
            ? Variables.Colors.Warning500
            : $color === "gray"
            ? Variables.Colors.Gray500
            : $color === "black"
            ? Variables.Colors.Black
            : $color === "white"
            ? Variables.Colors.White
            : ""}
    `,

    AllColors: ({ $color }: allColorsProps) => css`
        ${Mixins.FajnyColors};
        ${Mixins.ColorsShort};
    `,

    ColorsHoverDefault: ({ $color }: colorsHoverProps) => css`
        ${$color === "primary"
            ? Variables.Colors.Primary500
            : $color === "secondary"
            ? Variables.Colors.Secondary500
            : $color === "success"
            ? Variables.Colors.Success500
            : $color === "danger"
            ? Variables.Colors.Danger500
            : $color === "warning"
            ? Variables.Colors.Warning500
            : $color === "white"
            ? Variables.Colors.White
            : ""};
    `,

    ColorsHoverHover: ({ $color }: colorsHoverProps) => css`
        ${$color === "primary"
            ? Variables.Colors.Primary300
            : $color === "secondary"
            ? Variables.Colors.Secondary300
            : $color === "success"
            ? Variables.Colors.Success300
            : $color === "danger"
            ? Variables.Colors.Danger300
            : $color === "warning"
            ? Variables.Colors.Warning300
            : $color === "white"
            ? Variables.Colors.Gray300
            : ""};
    `,

    ColorsHoverActive: ({ $color }: colorsHoverProps) => css`
        ${$color === "primary"
            ? Variables.Colors.Primary600
            : $color === "secondary"
            ? Variables.Colors.Secondary600
            : $color === "success"
            ? Variables.Colors.Success600
            : $color === "danger"
            ? Variables.Colors.Danger600
            : $color === "warning"
            ? Variables.Colors.Warning600
            : $color === "white"
            ? Variables.Colors.Gray100
            : ""};
    `,

    Grid: ({
        $inline,
        $col,
        $gap,
        $columnGap,
        $rowGap,
        $justifyItems,
        $alignItems,
        $justifyContent,
        $alignContent,
        $padding,
    }: gridProps) => css`
        display: ${$inline ? "inline-grid" : "grid"};
        grid-template-columns: ${typeof $col === "number" ? `repeat(${$col}, 1fr)` : $col};
        gap: ${$gap === "xxl"
            ? Variables.Spacers.XXL
            : $gap === "xl"
            ? Variables.Spacers.XL
            : $gap === "l"
            ? Variables.Spacers.L
            : $gap === "m"
            ? Variables.Spacers.M
            : $gap === "s"
            ? Variables.Spacers.S
            : $gap === "xs"
            ? Variables.Spacers.XS
            : $gap === "xxs"
            ? Variables.Spacers.XXS
            : $gap
            ? stringifyPx($gap)
            : ""};
        column-gap: ${$columnGap === "xxl"
            ? Variables.Spacers.XXL
            : $columnGap === "xl"
            ? Variables.Spacers.XL
            : $columnGap === "l"
            ? Variables.Spacers.L
            : $columnGap === "m"
            ? Variables.Spacers.M
            : $columnGap === "s"
            ? Variables.Spacers.S
            : $columnGap === "xs"
            ? Variables.Spacers.XS
            : $columnGap === "xxs"
            ? Variables.Spacers.XXS
            : $columnGap
            ? stringifyPx($columnGap)
            : ""};
        row-gap: ${$rowGap === "xxl"
            ? Variables.Spacers.XXL
            : $rowGap === "xl"
            ? Variables.Spacers.XL
            : $rowGap === "l"
            ? Variables.Spacers.L
            : $rowGap === "m"
            ? Variables.Spacers.M
            : $rowGap === "s"
            ? Variables.Spacers.S
            : $rowGap === "xs"
            ? Variables.Spacers.XS
            : $rowGap === "xxs"
            ? Variables.Spacers.XXS
            : $rowGap
            ? stringifyPx($rowGap)
            : ""};
        justify-items: ${$justifyItems};
        align-items: ${$alignItems};
        justify-content: ${$justifyContent};
        align-content: ${$alignContent};
        padding: ${$padding ? stringifyPx($padding) : ""};
    `,

    Flexbox: ({ $inline, $direction, $wrap, $justify, $align, $gap, $rowGap, $columnGap }: flexboxProps) => css`
        display: ${$inline ? "inline-flex" : "flex"};
        flex-direction: ${$direction};
        flex-wrap: ${$wrap};
        justify-content: ${$justify};
        align-items: ${$align};
        gap: ${$gap === "xxl"
            ? Variables.Spacers.XXL
            : $gap === "xl"
            ? Variables.Spacers.XL
            : $gap === "l"
            ? Variables.Spacers.L
            : $gap === "m"
            ? Variables.Spacers.M
            : $gap === "s"
            ? Variables.Spacers.S
            : $gap === "xs"
            ? Variables.Spacers.XS
            : $gap === "xxs"
            ? Variables.Spacers.XXS
            : $gap
            ? stringifyPx($gap)
            : ""};
        column-gap: ${$columnGap === "xxl"
            ? Variables.Spacers.XXL
            : $columnGap === "xl"
            ? Variables.Spacers.XL
            : $columnGap === "l"
            ? Variables.Spacers.L
            : $columnGap === "m"
            ? Variables.Spacers.M
            : $columnGap === "s"
            ? Variables.Spacers.S
            : $columnGap === "xs"
            ? Variables.Spacers.XS
            : $columnGap === "xxs"
            ? Variables.Spacers.XXS
            : $columnGap
            ? stringifyPx($columnGap)
            : ""};
        row-gap: ${$rowGap === "xxl"
            ? Variables.Spacers.XXL
            : $rowGap === "xl"
            ? Variables.Spacers.XL
            : $rowGap === "l"
            ? Variables.Spacers.L
            : $rowGap === "m"
            ? Variables.Spacers.M
            : $rowGap === "s"
            ? Variables.Spacers.S
            : $rowGap === "xs"
            ? Variables.Spacers.XS
            : $rowGap === "xxs"
            ? Variables.Spacers.XXS
            : $rowGap
            ? stringifyPx($rowGap)
            : ""};
    `,

    Icon: ({ $name, $color, $size }: iconProps) => css`
        content: "";
        mask: url("../icons/${$name}.svg") no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${$color === "black"
            ? Variables.Colors.Black
            : $color === "white"
            ? Variables.Colors.White
            : $color === "gray-50"
            ? Variables.Colors.Gray50
            : $color === "gray-100"
            ? Variables.Colors.Gray100
            : $color === "gray-200"
            ? Variables.Colors.Gray200
            : $color === "gray-300"
            ? Variables.Colors.Gray300
            : $color === "gray-400"
            ? Variables.Colors.Gray400
            : $color === "gray-500"
            ? Variables.Colors.Gray500
            : $color === "gray-600"
            ? Variables.Colors.Gray600
            : $color === "gray-700"
            ? Variables.Colors.Gray700
            : $color === "gray-800"
            ? Variables.Colors.Gray800
            : $color === "gray-900"
            ? Variables.Colors.Gray900
            : $color === "primary-50"
            ? Variables.Colors.Primary50
            : $color === "primary-100"
            ? Variables.Colors.Primary100
            : $color === "primary-200"
            ? Variables.Colors.Primary200
            : $color === "primary-300"
            ? Variables.Colors.Primary300
            : $color === "primary-400"
            ? Variables.Colors.Primary400
            : $color === "primary-500"
            ? Variables.Colors.Primary500
            : $color === "primary-600"
            ? Variables.Colors.Primary600
            : $color === "primary-700"
            ? Variables.Colors.Primary700
            : $color === "primary-800"
            ? Variables.Colors.Primary800
            : $color === "primary-900"
            ? Variables.Colors.Primary900
            : $color === "secondary-50"
            ? Variables.Colors.Secondary50
            : $color === "secondary-100"
            ? Variables.Colors.Secondary100
            : $color === "secondary-200"
            ? Variables.Colors.Secondary200
            : $color === "secondary-300"
            ? Variables.Colors.Secondary300
            : $color === "secondary-400"
            ? Variables.Colors.Secondary400
            : $color === "secondary-500"
            ? Variables.Colors.Secondary500
            : $color === "secondary-600"
            ? Variables.Colors.Secondary600
            : $color === "secondary-700"
            ? Variables.Colors.Secondary700
            : $color === "secondary-800"
            ? Variables.Colors.Secondary800
            : $color === "secondary-900"
            ? Variables.Colors.Secondary900
            : $color === "success-50"
            ? Variables.Colors.Success50
            : $color === "success-100"
            ? Variables.Colors.Success100
            : $color === "success-200"
            ? Variables.Colors.Success200
            : $color === "success-300"
            ? Variables.Colors.Success300
            : $color === "success-400"
            ? Variables.Colors.Success400
            : $color === "success-500"
            ? Variables.Colors.Success500
            : $color === "success-600"
            ? Variables.Colors.Success600
            : $color === "success-700"
            ? Variables.Colors.Success700
            : $color === "success-800"
            ? Variables.Colors.Success800
            : $color === "success-900"
            ? Variables.Colors.Success900
            : $color === "danger-50"
            ? Variables.Colors.Danger50
            : $color === "danger-100"
            ? Variables.Colors.Danger100
            : $color === "danger-200"
            ? Variables.Colors.Danger200
            : $color === "danger-300"
            ? Variables.Colors.Danger300
            : $color === "danger-400"
            ? Variables.Colors.Danger400
            : $color === "danger-500"
            ? Variables.Colors.Danger500
            : $color === "danger-600"
            ? Variables.Colors.Danger600
            : $color === "danger-700"
            ? Variables.Colors.Danger700
            : $color === "danger-800"
            ? Variables.Colors.Danger800
            : $color === "danger-900"
            ? Variables.Colors.Danger900
            : $color === "warning-50"
            ? Variables.Colors.Warning50
            : $color === "warning-100"
            ? Variables.Colors.Warning100
            : $color === "warning-200"
            ? Variables.Colors.Warning200
            : $color === "warning-300"
            ? Variables.Colors.Warning300
            : $color === "warning-400"
            ? Variables.Colors.Warning400
            : $color === "warning-500"
            ? Variables.Colors.Warning500
            : $color === "warning-600"
            ? Variables.Colors.Warning600
            : $color === "warning-700"
            ? Variables.Colors.Warning700
            : $color === "warning-800"
            ? Variables.Colors.Warning800
            : $color === "warning-900"
            ? Variables.Colors.Warning900
            : $color === "primary"
            ? Variables.Colors.Primary500
            : $color === "secondary"
            ? Variables.Colors.Secondary500
            : $color === "success"
            ? Variables.Colors.Success500
            : $color === "danger"
            ? Variables.Colors.Danger500
            : $color === "warning"
            ? Variables.Colors.Warning500
            : $color === "gray"
            ? Variables.Colors.Gray500
            : $color === "primary"
            ? Variables.Colors.Primary500
            : $color === "secondary"
            ? Variables.Colors.Secondary500
            : $color === "success"
            ? Variables.Colors.Success500
            : $color === "danger"
            ? Variables.Colors.Danger500
            : $color === "warning"
            ? Variables.Colors.Warning500
            : $color === "gray"
            ? Variables.Colors.Gray500
            : $color
            ? $color
            : "currentColor"};
        display: inline-block;
        width: ${$size}px;
        height: ${$size}px;
    `,
}

export default Mixins
