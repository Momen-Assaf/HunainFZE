const theme = {
    colors: {
        primary: "#1E407D", // Primary color
        textLight: "#FFFFFF", // Light text color
        textDark: "#363636", // Dark text color
        placeHolderText: "1px solid rgba(255, 255, 255, 0.9)", /* white color with 25% opacity */
        background_primary: "#FFFFFF", // Primary background color
        background_secondary: "#FBFBFB", // Secondary background color
        primaryLightWithOpacity: "rgba(30, 64, 125, 0.75)",
        hover: "#1C3A6A", // Color for hover effects
        shadowColor: "#F0F0F0",
        cardBorder: "1px solid rgba(0, 0, 0, 0.25)", /* black color with 25% opacity */
    },
    fonts: {
        primary: "Inter, sans-serif", // Primary font
        secondary: "Sen, sans-serif", // Secondary font
    },
    fontWeight: {
        thin: 100, // Thin font weight
        extraLight: 200, // Extra-light font weight
        light: 300, // Light font weight
        regular: 400, // Regular font weight
        medium: 500, // Medium font weight
        semiBold: 600, // Semi-bold font weight
        bold: 700, // Bold font weight
        extraBold: 800, // Extra-bold font weight
        black: 900, // Black font weight
    },
    fontSize: {
        small: "12px",       // Standard small text size for captions or notes
        smallMedium: "14px",
        medium: "16px",      // Base size for body text
        paragraph: "20px",   // Slightly larger for emphasis in paragraphs
        mediumLarge: "22px",
        heading2: "24px",    // Subheadings
        large: "32px",       // Large text for headers
        heading1: "40px",    // Main headings
        xLarge: "80px",      // Extra-large text for titles or display text
    },
    borderRadius: {
        sm: "5px", // Small border radius
        md: "15px", // Medium border radius
        lg: "25px", // Large border radius
        xlg: "100px", // Extra-large border radius
        full: "9999px", // Full border radius for pill shapes
    },
    boxShadow: {
        light: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
        medium: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Medium shadow
        serviceCard: "4px 4px 1px rgba(240, 240, 240, 1)"
    },
};

export default theme;
