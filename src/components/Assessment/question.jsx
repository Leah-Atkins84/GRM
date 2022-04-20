import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ProgressBar from "./ProgressBar";
import Slide from "@mui/material/Slide";
import "./Assessment.css";
import userSaga from "../../redux/sagas/user.saga";

function Question({ index, setIndex, handleChange, value, setValue }) {
  // const questions = useSelector((store) => store.questions);

  let questions = [
    { id: 1, name: "There is a purpose to my life." },
    { id: 2, name: "I understand why I do things." },
    { id: 3, name: "I can recognize my emotions and feelings." },
    { id: 4, name: "I feel confident I can handle hard times." },
    { id: 5, name: "I am aware of my strengths." },
    { id: 6, name: "I can solve my problems." },
    { id: 7, name: "I come up with new ways to solve problems." },
    { id: 8, name: "I know how to handle problems." },
    { id: 9, name: "I have many friends." },
    { id: 10, name: "I know people I can speak to about my challenges." },
    { id: 11, name: "I have family members I can talk to." },
    { id: 12, name: "I have a friend I can trust." },
    { id: 13, name: "I have teachers I can talk to." },
    { id: 14, name: "The world is better with me in it." },
    { id: 15, name: "The things I do make a difference." },
    { id: 16, name: "I feel bad when others get hurt." },
    { id: 17, name: "I understand what others go through." },
    { id: 18, name: "I appreciate how others feel and think." },
    { id: 19, name: "I am patient with people who don't understand me." },
    { id: 20, name: "I can express myself around my friends." },
    { id: 21, name: "I can express myself around my family." },
    { id: 22, name: "I can express myself around my adults." },
    { id: 23, name: "I finish what I start." },
    { id: 24, name: "I can change my surroundings." },
    { id: 25, name: "I can change my behavior to match the situation." },
    { id: 26, name: "I try to find the good in every situation." },
    { id: 27, name: "What would help build your resilience?" },
  ];

  const handleNext = () => {
    if (value == "") {
      alert("MUST ANSWER QUESTION");
      return;
    }
    setValue("");
    setIndex(index + 1);
  };

  const handleBack = () => {
    setIndex(index - 1);
    setValue("");
  };

  return (
    <Slide direction="left" in="open" mountOnEnter unmountOnExit>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: 10,
        }}
      >
        <div className="question-container">
          <Typography variant="h5" className="question-text">
            {questions[index].name}
          </Typography>
          <FormControl className="form-control">
            <RadioGroup
              row
              aria-labelledby="radio-buttons"
              value={value}
              onChange={handleChange}
            >
              {/* <Typography variant="b2" sx={{ mr: 1, alignSelf: "center" }}>
                  Disagree
                </Typography> */}
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="1"
                labelPlacement="bottom"
                name={questions[index].id}
              />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="2"
                labelPlacement="bottom"
                name={questions[index].id}
              />
              <FormControlLabel
                value={3}
                control={<Radio />}
                label="3"
                labelPlacement="bottom"
                name={questions[index].id}
              />
              <FormControlLabel
                value={4}
                control={<Radio />}
                label="4"
                labelPlacement="bottom"
                name={questions[index].id}
              />
              <FormControlLabel
                value={5}
                control={<Radio />}
                label="5"
                labelPlacement="bottom"
                name={questions[index].id}
              />
            </RadioGroup>
            <div className="agree-cont">
              <Typography variant="b2">Disagree</Typography>
              <Typography variant="b2">Agree</Typography>
            </div>
            <div className="assess-buttons-container">
              <Button
                variant="contained"
                className="assess-buttons"
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="contained"
                className="assess-buttons"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </FormControl>
        </div>
      </Container>
    </Slide>
  );
}

export default Question;
