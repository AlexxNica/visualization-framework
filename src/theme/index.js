import lightMuiTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const customTheme = {
    // Custom borders
    thinBorder: "solid 1px",
    boldBorder: "solid 2px",

    // Custom colors
    blackColor: "#6b6b6b",
    blackDarkColor: "#5e5959",
    blackDarkerColor: "#232022",
    blackLightColor: "#777d7d",
    blackLighterColor: "#91aeae",
    blueBlindColor: "#0072b2",
    blueColor: "#6b94ec",
    blueDarkColor: "#5a83de",
    blueDarkerColor: "#333333",
    blueLightColor: "#7da3f7",
    blueLighterColor: "#b3d0ff",
    bluePaleColor: "#c7d9f9",
    greenBlindColor: "#009e73",
    greenColor: "#b3d645",
    greenDarkColor: "#36ab65",
    greenLightColor: "#e0fe83",
    greenLighterColor: "#ffffcb",
    greyColor: "#d9d9d9",
    greyDarkColor: "#888888",
    greyDarkerColor: "#333333",
    greyLightColor: "#f2f2f2",
    greyLighterColor: "#fcfcfc",
    mauveColor: "#aa97f2",
    orangeBlindColor: "#e69f00",
    orangeColor: "#f9b13d",
    orangeLightColor: "#fec26a",
    orangeLighterColor: "#fed291",
    redBlindColor: "#d55e00",
    redColor: "#f76159",
    transparentColor: "transparent",
    whiteColor: "#ffffff",
    windowBodyColor: "#f5f5f5",
    yellowBlindColor: "#f0e442",
    yellowColor: "#eeda54",
}


export const lightTheme = getMuiTheme(lightMuiTheme, {
    fontFamily: "Arial",
    spacing: {
        iconSize: 24,
        desktopGutter: 24,
        desktopGutterMore: 32,
        desktopGutterLess: 16,
        desktopGutterMini: 8,
        desktopKeylineIncrement: 48,
        desktopDropDownMenuItemHeight: 32,
        desktopDropDownMenuFontSize: 15,
        desktopDrawerMenuItemHeight: 48,
        desktopSubheaderHeight: 48,
        desktopToolbarHeight: 56,
    },
    palette: {
        // Material-UI
        primary1Color: customTheme.blueColor,
        primary2Color: customTheme.greyLightColor,
        primary3Color: customTheme.greyDarkColor,

        // Texts
        textColor: customTheme.greyDarkColor,
        alternateTextColor: customTheme.blackColor,

        accent1Color: customTheme.blueDarkColor,
        accent2Color: customTheme.greyDarkColor,
        accent3Color: customTheme.greyDarkerColor,

        canvasColor: customTheme.whiteColor,
        borderColor: customTheme.greyLightColor,
        disabledColor: customTheme.greyLightColor,
        pickerHeaderColor: customTheme.greyLightColor,
        clockCircleColor: customTheme.greyLightColor,
        shadowColor: customTheme.whiteColor,

        // Custom borders
        thinBorder: customTheme.thinBorder,
        boldBorder: customTheme.boldBorder,

        // Custom colors
        blackColor: customTheme.blackColor,
        blackDarkColor: customTheme.blackDarkColor,
        blackDarkerColor: customTheme.blackDarkerColor,
        blackLightColor: customTheme.blackLightColor,
        blackLighterColor: customTheme.blackLighterColor,
        blueBlindColor: customTheme.blueBlindColor,
        blueColor: customTheme.blueColor,
        blueDarkColor: customTheme.blueDarkColor,
        blueDarkerColor: customTheme.blueDarkerColor,
        blueLightColor: customTheme.blueLightColor,
        blueLighterColor: customTheme.blueLighterColor,
        bluePaleColor: customTheme.bluePaleColor,
        greenBlindColor: customTheme.greenBlindColor,
        greenColor: customTheme.greenColor,
        greenDarkColor: customTheme.greenDarkColor,
        greenLightColor: customTheme.greenLightColor,
        greenLighterColor: customTheme.greenLighterColor,
        greyColor: customTheme.greyColor,
        greyDarkColor: customTheme.greyDarkColor,
        greyDarkerColor: customTheme.greyDarkerColor,
        greyLightColor: customTheme.greyLightColor,
        greyLighterColor: customTheme.greyLighterColor,
        mauveColor: customTheme.mauveColor,
        orangeBlindColor: customTheme.orangeBlindColor,
        orangeColor: customTheme.orangeColor,
        orangeLightColor: customTheme.orangeLightColor,
        orangeLighterColor: customTheme.orangeLighterColor,
        redBlindColor: customTheme.redBlindColor,
        redColor: customTheme.redColor,
        transparentColor: customTheme.transparentColor,
        whiteColor: customTheme.whiteColor,
        windowBodyColor: customTheme.windowBodyColor,
        yellowBlindColor: customTheme.yellowBlindColor,
        yellowColor: customTheme.yellowColor,

    },
    drawer: {
        color: customTheme.greyLightColor,
    },
    appBar: {
        color: customTheme.greyLightColor,
        titleFontWeight: "300",
    },
    subheader: {
        fontWeight: "300",
        color: customTheme.greyDarkerColor,
    }
});

export const theme = lightTheme;