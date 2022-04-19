import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import './StudentDetails.css'
import { Radar } from "react-chartjs-2";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function StudentDetails(){
  // const studentId = useSelector((store) => store.scores.testDates);




  const [year, setYear] = useState('');
  const [term, setTerm] = useState('');
  const [labelOne, setLabelOne] = useState('test not taken yet');
  const [labelTwo, setLabelTwo] = useState('test not taken yet');
  const [labelThree, setLabelThree] = useState('test not taken yet');
  const [labelFour, setLabelFour] = useState('test not taken yet');
  const history = useHistory ();
  const dispatch = useDispatch();
  const studentDetails = useSelector((store) => store.studentReducer.studentDetailsReducer);
  // const [userId, setUserId] = useState (studentDetails.details.id)
  const scores = useSelector((store) => store.scores.indScoresReducer);
  console.log(scores)
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );


  const data = {
    labels: [
      "Balance",
      "Connection",
      "Contribution",
      "Empathy",
      "Confidence",
      "Self Control",
      "Expression",
      "Adaptability",
    ],
    datasets: [
      {
        label: [`${scores[0]?.date}-Test#${scores[0]?.assessmentBatchId}`],
        data: [scores[0]?.avgScore, scores[1]?.avgScore, scores[2]?.avgScore, scores[3]?.avgScore, scores[4]?.avgScore, scores[5]?.avgScore, scores[6]?.avgScore, scores[7]?.avgScore],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: [`${scores[8]?.date}-Test#${scores[8]?.assessmentBatchId}`],
        data: [scores[8]?.avgScore, scores[9]?.avgScore, scores[10]?.avgScore, scores[11]?.avgScore, scores[12]?.avgScore, scores[13]?.avgScore, scores[14]?.avgScore, scores[15]?.avgScore],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: [`${scores[16]?.date}-Test#${scores[16]?.assessmentBatchId}`],
        data: [scores[16]?.avgScore, scores[17]?.avgScore, scores[18]?.avgScore, scores[19]?.avgScore, scores[20]?.avgScore, scores[21]?.avgScore, scores[22]?.avgScore, scores[23]?.avgScore],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: [`${scores[24]?.date}-Test#${scores[24]?.assessmentBatchId}`],
        data: [scores[24]?.avgScore, scores[25]?.avgScore, scores[26]?.avgScore, scores[27]?.avgScore, scores[28]?.avgScore, scores[29]?.avgScore, scores[30]?.avgScore, scores[31]?.avgScore],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };


    return (
        <>  
         {/* <Card elevation={4}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                 Hello 
                </Typography>
              </CardContent>
          </Card> */}
          <div className="detailsContainer">
          <br></br>
          <br></br>
          <h2>{studentDetails.details.firstName}<span> </span>{studentDetails.details.lastName}</h2>
          <h3>{studentDetails.details.name}</h3>
          <h4>Class of {studentDetails.details.graduationYear}</h4>
          <FormControl sx={{minWidth: 100}} size="small">
            <InputLabel id="yearLabel">Year</InputLabel>
            <Select
              labelId="yearLabel"
              id="year"
              value={year}
              label="Year"
              onChange={(e) => setYear(e.target.value)}>
              <MenuItem value="all">Select All</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{minWidth: 100}} size="small">
            <InputLabel id="termLabel">Term</InputLabel>
            <Select
              labelId="termLabel"
              id="term"
              value={term}
              label="Term"
              onChange={(e) => setTerm(e.target.value)}>
              <MenuItem value="all">Select All</MenuItem>
              <MenuItem value="fall">Fall</MenuItem>
              <MenuItem value="spring">Spring</MenuItem>
            </Select>
          </FormControl>
<br></br>
<div className="dash-filter-graph-container">
<Radar
          data={data}
          options={{
            events: ["click"],
            scales: {
              r: {
                angleLines: {
                  display: true,
                },
                max: 5,
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                },
              },
            },
          }}
        />
        </div>
        </div>
    </>
    )
}

export default StudentDetails;