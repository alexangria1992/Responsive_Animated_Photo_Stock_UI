export const Colors = {
    Gray: "#F5F5F5",
    Gray2: "#AAAAAA",
    Background: "#FFFFFF",
    Black: "#212121",
    GrayBG: `rgba(255,255,255,0.5)`,
    Gradient: {
        Dark: ["rgba(62, 62, 62, 1)", "rgba(20, 20, 20, 1)"],
    }
}

const BreakPoints = {
    MobileS: "320px",
    MobileM: "376px",
    MobileL: "425px",
    Tablet: "768px",
    Laptop: "1024px",
    LaptopL: "1440px",
    Desktop: "2560px",
}

export const Devices = {
    MobileS: `(min-width: ${BreakPoints.MobileS})`,
    MobileM: `(min-width: ${BreakPoints.MobileM})`,
    MobileL: `(min-width: ${BreakPoints.MobileL})`,
    Tablet: `(min-width: ${BreakPoints.Tablet})`,
    Laptop: `(min-width: ${BreakPoints.Laptop})`,
    LaptopL: `(min-width: ${BreakPoints.LaptopL})`,
    Desktop: `(min-width: ${BreakPoints.Desktop})`,

}