import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddBatch from "../AddBatch/AddBatch";
import { Divider } from "@mui/material";
import "./AdminAssess.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function AdminAssess() {
  const dispatch = useDispatch();
  const history = useHistory();
  const batch = useSelector((store) => store.adminBatch.adminBatches);
  const activeBatch = useSelector((store) => store.adminBatch.activeBatch);

  useEffect(() => {
    dispatch({ type: "FETCH_ACTIVE_BATCH" });
    dispatch({ type: "FETCH_ADMIN_BATCH" });
    dispatch({ type: "SET_ASSESS_PATH" });
  }, [dispatch]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgba(17, 24, 39, 0.7)",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="component-container">
      <AddBatch />
      <Divider sx={{ m: 5 }} />
      <Typography variant="h5">Active Assessments:</Typography>
      <Box sx={{ display: "flex", p: 1, flexWrap: 'wrap', m: 2 }}>
        {activeBatch?.map((batch) => (
          <>
            <Card sx={{ minWidth: 275, p: 1, m: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {batch.fiscalYear}
                </Typography>
                <Typography variant="body2" component="div">
                  <b>Batch Number:</b> {batch.batchNumber}
                </Typography>
                <Typography variant="body2" component="div">
                  <b>Semester Number:</b> {batch.semesterNumber}
                </Typography>
                
                <Typography  variant="body2">
                  <b>Start Date:</b> {new Date(batch?.startDate).toDateString()}
                </Typography>
                <Typography sx={{ mb: 1 }} variant="body2">
                  <b>End Date:</b> {new Date(batch?.endDate).toDateString()}
                </Typography>
                <Typography variant="body2"></Typography>
              </CardContent>
            </Card>

          </>
        ))}
      </Box>
      <Divider sx={{ m: 5 }} />
      <Typography variant="h5">Past Assessments:</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center"}}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Batch Number</StyledTableCell>
                <StyledTableCell align="left">Semester Number</StyledTableCell>
                <StyledTableCell align="left">Year</StyledTableCell>
                <StyledTableCell align="left">School ID</StyledTableCell>
                <StyledTableCell align="left">Start Date</StyledTableCell>
                <StyledTableCell align="left">End Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {batch?.map((row) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row?.batchNumber}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row?.semesterNumber}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row?.fiscalYear}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row?.schoolId}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {new Date(row?.startDate).toDateString()}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {new Date(row?.endDate).toDateString()}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <div className="add-batch"></div>
    </div>
  );
}

export default AdminAssess;
