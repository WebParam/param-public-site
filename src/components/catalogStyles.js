const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  headingContainer: {
    marginBottom: "2.625rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headingTitle: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& $p": {
      fontFamily: "Rubik",
      fontSize: "2.25rem",
      fontWeight: 500,
      color: "#46535c"
    }
  },
  headingButton: {
    width: "5.313rem",
    height: "2rem",
    marginRight: "0.625rem",
    padding: "0.5rem 0.438rem",
    borderRadius: "2px",
    border: "solid 1px #92a9b9"
  },
  searchIcon: {
    width: "1.063rem",
    height: "1.063rem",
    color: "#657682"
  },
  headingOptions: {
    display: "flex",
    alignItems: "flex-end"
  },
  divider: {
    height: "1.688rem",
    margin: " 0 1.313rem 0 1.625rem",
    backgroundColor: "black"
  },
  selectLabel: {
    fontFamily: "Rubik",
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: 1.33,
    textAlign: "center",
    color: "#46535c"
  },
  carouselHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& $p": {
      fontFamily: "Rubik",
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: "normal",
      color: "#46535c"
    },
    "& $button": {
      "& $span:nth-child(1)": {
        fontSize: "0.75rem",
        fontWeight: 500,
        lineHeight: 1.33,
        textAlign: "center",
        color: "#46535c"
      }
    }
  },
  carouselContainer: {
    margin: "1.75rem 0 3.125rem 0"
  }
});

export default styles;
