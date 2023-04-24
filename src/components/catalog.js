import React from "react";
import {
  Grid,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button
} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./catalogStyles";
import { makeStyles } from "@material-ui/core/styles";
import CarouselComp from "./carousel";
import RectangularCard1 from "./rectangularCard";

const catalog_data = {
  popularBundles: [
    {
      bundleTitle: "by Octopi One"
    },
    {
      bundleTitle: "by Developia"
    },
    {
      bundleTitle: "by Custom Company Name1"
    },
    {
      bundleTitle: "by Custom Company Name2"
    },
    {
      bundleTitle: "by Custom Company Name4"
    },{
      bundleTitle: "by Custom Company Name5"
    }
    
  ]
};
const useStyles = makeStyles(styles);

const Catalog = (props) => {
  const classes = useStyles();

  let popularBundles = JSON.parse(JSON.stringify(catalog_data.popularBundles));

  return (
    <Grid container>
      <Heading classes={classes} />
      <CarouselWrapperRect
        classes={classes}
        title="POPULAR BUNDLES"
        data={popularBundles}
      />
    </Grid>
  );
};

const Heading = (props) => {
  let { classes } = props;
  const [category, setCategory] = React.useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Grid item container className={classes.headingContainer}>
      <Grid item className={classes.headingTitle}>
        <Typography>Catalog</Typography>
      </Grid>
      <Grid item className={classes.headingOptions}>
        <SearchIcon className={classes.searchIcon} />
        <Divider orientation="vertical" className={classes.divider} />
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-label"
            className={classes.selectLabel}
          >
            CATEGORIES
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value={"Type A"}>Type A</MenuItem>
            <MenuItem value={"Type B"}>Type B</MenuItem>
            <MenuItem value={"Type C"}>Type C</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

const CarouselWrapperRect = ({ classes, title, data }) => {
  let newArray = [];
  let newData = [...data];
  while (newData.length > 0) newArray.push(newData.splice(0, 2));

  console.log("newArray: ", newArray);
  return (
    <Grid item container>
      <Grid item container className={classes.carouselHeading}>
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.headingButton}>
            VIEW ALL
          </Button>
        </Grid>
      </Grid>
      <Grid item container className={classes.carouselContainer}>
        <CarouselComp>
          {newArray.map((each, i) => (
            <>
            <CarouselSlideRect newData={each} key={i} />
            </>
          ))}
        </CarouselComp>
      </Grid>
    </Grid>
  );
};

const CarouselSlideRect = ({ newData }) => {
  console.log("am i printed");
  console.log("what is data: ", newData);
  return (
    <Grid container direction="row" xs={12} spacing={2}>
      {newData.map((each, i) => (
        <Grid item xs={6}>
          <RectangularCard1 bundleBy={each.bundleTitle} />
        </Grid>
      ))}
      {/* <Grid item xs={6}>
                <RectangularCard1 bundleBy='by Octopi One' />
            </Grid>
            <Grid item xs={6}>
                <RectangularCard1 bundleBy='by Developia' />
            </Grid> */}
    </Grid>
  );
};

export default Catalog;
