import React from "react";
import {
  Paper,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  Chip
} from "@material-ui/core";

import styles from "./rectangularCard1Styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const RectangularCard1 = (props:any) => {
  const classes = useStyles();

  let { bundleBy } = props;
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container xs={12}>
          <Grid item xs={5}>
            <CardMedia image="" />
          </Grid>
          <Grid item xs={7}>
            <Grid container>
              <Grid item container direction="column">
                <Grid item>
                  <Typography className={classes.topLabel}>
                    Bundle Title
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.topLabelSmall}>
                    {bundleBy}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.middleLabel}>
                <Typography>Suscription payment</Typography>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography className={classes.smallLabel}>
                    Includes:
                  </Typography>
                </Grid>
                <Grid item>
                  <Chip label="Channels" className={classes.chip} />
                  <Chip label="Channel Connector" className={classes.chip} />
                  <Chip label="Notifications Hub" className={classes.chip} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container xs={12}>
          <Grid item xs={5}></Grid>
          <Grid item xs={7} container className={classes.buttonsContainer}>
            <Grid item>
              <Button className={classes.actionButton}>INSTALL</Button>
            </Grid>
            <Grid item>
              <span className={classes.priceLabel}>Start at</span>
              <Chip
                variant="outlined"
                label="$520.00"
                className={classes.chipPrice}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default RectangularCard1;
