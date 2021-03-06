import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posts: {
    width: "100%",
  },
  firstdiv: {
    width: "40%",
  },
  seconddiv: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
  },
  imagediv: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5%",
    paddingTop: "3%",
  },
  maincontent1: {
    paddingTop: "3%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#c1c6c8",
    paddingBottom: "3%",
    marginTop: "-2%",
  },
  maincontent2: {
    paddingTop: "1%",
    paddingBottom: "2%",
  },
  maincontent3: {
    paddingTop: "3%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#37a1af",
    paddingBottom: "3%",
    marginTop: "-2%",
  },
  maincontent4: {
    paddingTop: "1%",
    paddingBottom: "1%",
    display: "flex",
    flexDirection: "column",
  }, 
  maincontent5: {
    paddingTop: "1%",
    width: "100%",
    backgroundColor: "#37a1af",
    paddingBottom: "1%",
  },
  maincontent6: {
    backgroundColor: "#595959",
    paddingLeft: "2%",
    paddingBottom: "1%",
    paddingTop: "2%",
  },
  maincontent7: {
    paddingTop: "3%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#c1c6c8",
    paddingBottom: "3%",
    marginTop: "-2%",
  },
  maincontent8: {
    paddingTop: "3%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#c1c6c8",
    paddingBottom: "3%",
    marginTop: "-2%",
  },
  title1: {
    fontWeight: 700,
    fontSize: "35px",
    color: "white",
    padding: "2px 1px",
    marginBottom: 0,
  },
  content: {
    fontWeight: 300,
    paddingLeft: "2%",
    width: "100%",
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "column",
  },
  content2: {
    fontWeight: 300,
    width: "60%",
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "column",
  },
  contentfont: {
    fontWeight: 400,
    fontSize: "17px",
    marginTop: 0,
    paddingLeft: "1%",
    width: "95%",
  },
  contentstyle: {
    fontWeight: 400,
    fontSize: "17px",
    paddingBottom: "2%",
    paddingLeft: "5%",
    color: "white",
    width: "90%",
  },
  contentstyle2: {
    fontWeight: 400,
    fontSize: "17px",
    paddingLeft: "25%",
    color: "white",
    width: "70%",
  },
  contentstyle3: {
    fontWeight: 600,
    fontSize: "45px",
    color: "white",
    width: "70%",
  },
  image: {
    width: "3%",
    height: "1%",
    paddingBottom: "2%",
    paddingLeft: "50%",
  },
  image2: {
    width: "80%",
    height: "30%",
    paddingLeft: "3%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  image3: {
    width: "80%",
    height: "80%",
    paddingBottom: "2%",
    paddingLeft: "10%",
  },
  image4: {
    width: "1%",
    height: "0.5%",
    paddingBottom: "2%",
    paddingLeft: "50%",
  },
  image5: {
    width: "70%",
    height: "30%",
    paddingBottom: "2%",
    paddingLeft: "10%",
  },
  separator: {
    borderLeft: "3px solid #ff780e",
    width: "0%",
    height: "50%",
    marginLeft: "2%",
    paddingTop: "0%",
  },
  btn: {
    color: "rgb(199, 63, 38)",
    border: "2px solid black",
    borderColor: "rgb(199, 63, 38)",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "20%",
    paddingBottom: "1%",
    marginTop: "3%",
    width: "50%",
    textTransform: "capitalize",
  },
  btn2: {
    color: "rgb(199, 63, 38)",
    border: "2px solid black",
    borderColor: "rgb(199, 63, 38)",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "35%",
    paddingBottom: "1%",
    marginTop: "3%",
    width: "40%",
    textTransform: "capitalize",
  },
  list: {
    color: "white",
  },
  atext: {
    fontSize: "19px",
    fontWeight: 500,
    color: "white",
    textTransform: "capitalize",
  },
  topic: {
    fontSize: "45px",
    fontWeight: 600,
    color: "#ff780e",
    textTransform: "capitalize",
  },
  comp1: {
      width: "100%",
  },
  comp2: {
    width: "100%",
},
ComputerImage: {
    width: "90%",
    height: "100%",
},
ImageHeading: {
    fontSize: "50px",
    fontWeight: 400,
    color: "white",
    paddingLeft: "30%",
},
ImageHeading2: {
    fontSize: "25px",
    fontWeight: 500,
    color: "white",
    paddingBottom: "3%",
},
ImageHeading3: {
    fontSize: "25px",
    fontWeight: 500,
    color: "white",
    paddingBottom: "3%",
    paddingTop: "24%",
},
heading1: {
  fontSize: "50px",
    fontWeight: 400,
    color: "white",
    paddingLeft: "4%",
},
heading2: {
  fontSize: "35px",
    fontWeight: 400,
    color: "white",
    paddingLeft: "4%",
    paddingBottom: "1%",
},
columndiv: {
  display: "flex",
  flexDirection: "column",
},
appBar: {
    backgroundColor: "red",
    borderColor: "#05070a",
    width: "30%",
    paddingLeft: "20%",
    overflow: "fixed",
    position: "static", 
  },
}));

export default useStyles;
