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

import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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

function Register() {
  const classes = useStyles();

  const [journeyDetails, setjourneyDetails] = useState("journeyDetails");
  const [mobileNumber, setmobileNumber] = useState("mobileNumber");
  const [userName, setuserName] = useState("userName");
  const [remarks, setremarks] = useState("remarks");

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      journeyDetails,
      mobileNumber,
      userName,
      remarks
    };
  }

  const EditButton = () => (
    <IconButton>
      <EditIcon />
    </IconButton>
  );

  const WhatsAppIcon = () => (
    <IconButton>
      <WhatsAppIcon />
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
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Card className={classes.root1}>
                  <TextField
                    id="journeyDetails"
                    value="BLR/KA  -  CHN/TN"
                    onInput={(e) => setjourneyDetails(e.target.value)}
                    required
                    fullWidth
                    variant="outlined"
                    label="Journey Details"
                    InputProps={{ endAdornment: <EditButton /> }}
                    autoFocus
                    margin="dense"
                  />
                  <p>
                    <b>1 Person, Hatchback</b>
                  </p>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography size="large" variant="h3" component="h2">
                      ₹{"10,450 "}
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

              <Grid item xs={12} spacing={20}>
                <Card className={classes.root2}>
                  <TextField
                    id="mobileNumber"
                    value="8888888888"
                    onInput={(e) => setmobileNumber(e.target.value)}
                    required
                    fullWidth
                    variant="outlined"
                    label="Enter your 10 digits mobile number"
                    margin="dense"
                    autoFocus
                  />
                  <CardActions>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="updateWhatsapp"
                          id="updateWhatsapp"
                          inputProps={{ adornedEnd: <WhatsAppIcon /> }}
                        />
                      }
                      label="Get updates on whatsapp"
                    />
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="userName"
                  value="Rahul"
                  onInput={(e) => setuserName(e.target.value)}
                  required
                  fullWidth
                  variant="outlined"
                  label="Enter your name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="remarks"
                  value="Call me immediately"
                  onInput={(e) => setremarks(e.target.value)}
                  fullWidth
                  variant="outlined"
                  label="Enter Remark(optional)"
                  autoFocus
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
              Verify via OTP
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default Register;
