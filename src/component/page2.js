import {
  Button,
  Container,
  FormControl,
  Grid,
  makeStyles,
  React,
  Typography,
  useState
} from "../component";

import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },

  formControl: {
    width: "100%",

    fontWeight: 600,
    alignContent: "center"
  },
  FormControlLabel: {
    width: "100%",
    margin: theme.spacing(2, 0, 3),
    fontWeight: 600,
    alignContent: "center"
  },
  selectEmpty: {
    width: "100%",
    marginTop: theme.spacing(2)
  },

  form: {
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    bgcolor: "#448aff"
  }
}));

function page2() {
  const classes = useStyles();

  const [journeyDetails, setjourneyDetails] = useState("journeyDetails");
  const [destination, setdestination] = useState("destination");
  const [carDetails, setcarDetails] = useState("carDetails");
  const [noOfTravellers, setnoOfTravellers] = useState("1");

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      journeyDetails,
      destination,
      carDetails,
      noOfTravellers
    };
  }

  const EditButton = () => (
    <IconButton>
      <EditIcon />
    </IconButton>
  );

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Place your Bid(2/4 step)
            <hr />
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <TextField
                  id="journeyDetails"
                  value="BLR/KA  -  CHN/TN"
                  onInput={(e) => setjourneyDetails(e.target.value)}
                  variant="standard"
                  label="Journey Details"
                  InputProps={{ endAdornment: <EditButton /> }}
                  autoFocus
                />
                <p>
                  <b>1 Person, Hatchback</b>
                </p>
              </Grid>

              <Grid item xs={12}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography size="large" variant="h2" component="h2">
                      ₹{"\t 750 "}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <FormControlLabel
                      control={
                        <Checkbox name="rateNegotiable" id="rateNegotiable" />
                      }
                      label="Rate Negotiable"
                    />
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Next
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default page2;