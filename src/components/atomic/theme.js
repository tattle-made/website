const headingLevelStyle = {
  "1": {
    font: {},
    small: {
      size: "34px",
      height: "40px",
      maxWidth: "816px",
    },
    medium: {
      size: "50px",
      height: "56px",
      maxWidth: "1200px",
    },
    large: {
      size: "82px",
      height: "88px",
      maxWidth: "1968px",
    },
    xlarge: {
      size: "114px",
      height: "120px",
      maxWidth: "2736px",
    },
  },
  "2": {
    font: {},
    small: {
      size: "26px",
      height: "32px",
      maxWidth: "624px",
    },
    medium: {
      size: "34px",
      height: "40px",
      maxWidth: "816px",
    },
    large: {
      size: "50px",
      height: "56px",
      maxWidth: "1200px",
    },
    xlarge: {
      size: "66px",
      height: "72px",
      maxWidth: "1584px",
    },
  },
  "3": {
    font: {
      weight: "400",
    },
    small: {
      size: "22px",
      height: "28px",
      maxWidth: "528px",
    },
    medium: {
      size: "26px",
      height: "32px",
      maxWidth: "624px",
    },
    large: {
      size: "34px",
      height: "40px",
      maxWidth: "816px",
    },
    xlarge: {
      size: "42px",
      height: "48px",
      maxWidth: "1008px",
    },
  },
  "4": {
    font: {},
    small: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    large: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    xlarge: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
  },
  "5": {
    font: {},
    small: {
      size: "16px",
      height: "22px",
      maxWidth: "384px",
    },
    medium: {
      size: "16px",
      height: "22px",
      maxWidth: "384px",
    },
    large: {
      size: "16px",
      height: "22px",
      maxWidth: "384px",
    },
    xlarge: {
      size: "16px",
      height: "22px",
      maxWidth: "384px",
    },
  },
  "6": {
    font: {},
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px",
    },
    medium: {
      size: "14px",
      height: "20px",
      maxWidth: "336px",
    },
    large: {
      size: "14px",
      height: "20px",
      maxWidth: "336px",
    },
    xlarge: {
      size: "14px",
      height: "20px",
      maxWidth: "336px",
    },
  },
}

const TattleTheme = {
  global: {
    font: {
      family: "Raleway",
    },
    colors: {
      brand: "#E65447",
      brand_1: "#FFDFDD",
      text: {
        light: "ffffff",
      },
    },
  },
  heading: {
    font: {
      family: "Bitter",
    },
    level: headingLevelStyle,
    responsive: true,
  },
  button: {
    border: {
      width: "1px",
      radius: "0.2em",
    },
    size: {
      xmedium: "90px",
    },
  },
}

export default TattleTheme
