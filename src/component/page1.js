import {
  Button,
  Container,
  FormControl,
  Grid,
  makeStyles,
  React,
  TextField,
  Typography,
  useState,
  InputLabel
} from "../component";

import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  formControl: {
    width: "100%",
    margin: theme.spacing(2, 0, 3),
    fontWeight: 600
  },
  selectEmpty: {
    width: "100%",
    marginTop: theme.spacing(2)
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    bgcolor: "#448aff"
  }
}));

function Page1() {
  const classes = useStyles();

  const [sourceLocation, setsourceLocation] = useState("sourceLocation");
  const [destination, setdestination] = useState("destination");
  const [carDetails, setcarDetails] = useState("carDetails");
  const [noOfTravellers, setnoOfTravellers] = useState("1");

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      sourceLocation,
      destination,
      carDetails,
      noOfTravellers
    };
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Place your Bid(1/4 step)
            <hr />
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fontWeight="bold"
                  name="sourceLocation"
                  value={"Bangalore"}
                  onInput={(e) => setsourceLocation(e.target.value)}
                  variant="outlined"
                  required
                  halfWidth
                  id="sourceLocation"
                  label="Enter source location"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  value={"Chennai"}
                  onInput={(e) => setdestination(e.target.value)}
                  required
                  halfWidth
                  id="destination"
                  label="Destination"
                  name="destination"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-carType-native-simple">
                    Enter Car Type
                  </InputLabel>
                  <Select
                    native
                    value={carDetails}
                    onChange={(e) => {
                      setcarDetails(e.target.value);
                    }}
                    label="carType"
                    inputProps={{
                      name: "carType",
                      id: "outlined-carType-native-simple"
                    }}
                  >
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Auto">Auto</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  value={noOfTravellers}
                  onInput={(e) => setnoOfTravellers(e.target.value)}
                  required
                  fullWidth
                  id="noOfTravellers"
                  label="Number of Travellers"
                  name="noOfTravellers"
                  autoComplete="lname"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enter bid details
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default Page1;
