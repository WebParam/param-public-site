const styles = (theme) => ({
  middleLabel: {
    margin: "1.125rem 0 1.125rem 0",
    fontSize: "0.75rem",
    lineHeight: "normal",
    color: "#657682"
  },
  smallLabel: {
    marginBottom: "0.375rem",
    fontSize: "0.75rem",
    lineHeight: "normal",
    color: "#657682"
  },
  chip: {
    marginRight: ".313rem",
    backgroundColor: "#657682",
    padding: "0.388rem",
    height: "1.175rem",
    borderRadius: "5px",
    marginBottom: ".313rem",
    "& $span": {
      fontSize: "0.688rem",
      color: "white"
    }
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  actionButton: {
    "& $span": {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.33,
      textAlign: "center",
      color: "#46535c"
    }
  },
  priceLabel: {
    marginRight: ".625rem",
    fontFamily: "Rubik",
    fontSize: "0.625rem",
    color: "#46535c"
  },
  topLabel: {
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: "normal",
    color: "#46535c"
  },
  topLabelSmall: {
    fontSize: "0.75rem",
    lineHeight: 1.33,
    color: "#46535c"
  },
  chipPrice: {
    height: "1.375rem",
    borderRadius: "5px"
  }
});

export default styles;
