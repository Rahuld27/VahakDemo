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
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  root_otp: {
    "& > *": {
      margin: theme.spacing(1)
    }
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

function page4() {
  const classes = useStyles();

  const [journeyDetails, setjourneyDetails] = useState("journeyDetails");
  const [otp, setotp] = useState("otp");
  const [bidDetails, setbidDetails] = useState("bidDetails");
  const [remarks, setremarks] = useState("remarks");

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      otp,
      journeyDetails,
      bidDetails,
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
            Place your Bid(3/4 step)
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
                    label="Journey Details"
                    InputProps={{ endAdornment: <EditButton /> }}
                    autoFocus
                    margin="dense"
                    notched="true"
                    multiline="true"
                  />
                  <p>
                    <b>1 Person, Hatchback</b>
                  </p>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className={classes.root1}>
                  <TextField
                    id="bidDetails"
                    onInput={(e) => setbidDetails(e.target.value)}
                    fullWidth
                    label="Bid Details"
                    multiline="true"
                    notched="true"
                    margin="none"
                    value={`${"8888888888"}${"                                                            Rahul"}${"                                                                        Call me immediately"}`}
                    InputProps={{ endAdornment: <p style={{textAlign: 'left'}}><span style={{color: 'rgb(32, 33, 36)', fontFamily: '"Google Sans", arial, sans-serif', fontSize: '24px', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', widows: 2, wordSpacing: '0px', WebkitTextStrokeWidth: '0px', backgroundColor: 'rgb(255, 255, 255)', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', display: 'inline !important', float: 'none'}}><strong>₹10,560</strong></span></p> }}
                    autoFocus
                  />
                </Card>
              </Grid>
              <Grid item xs={12} spacing={50}>
                <Card className={classes.root1}>
                  <TextField
                    id="otp"
                    value="We have sent an OTP to your mobile number, Please enter it below and submit your bid -8888888888"
                    InputProps={{ endAdornment:<EditButton />  }}
                    onInput={(e) => setotp(e.target.value)}
                    fullWidth
                    autoFocus
                    margin="none"
                    multiline="true"
                    notched="true"
                  />
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={10}>
              <Grid container item xs={3} spacing={1}>
                  <TextField  value="6" />
              </Grid>
              <Grid container item xs={3} spacing={2}>
              <TextField value="4"/>
              </Grid>
              <Grid container item xs={3} spacing={1}>
              <TextField  value="3"/>
              </Grid>
              <Grid container item xs={3} spacing={2}>
              <TextField  value="1"/>
              </Grid>
            </Grid>
<br />
<p style={{textAlign: 'center'}}><a href="http://resent otp"><strong><span style={{color: 'rgb(44, 130, 201)'}}>Resend otp again</span></strong></a></p>
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
export default page4;
