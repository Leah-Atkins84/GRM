import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* reports() {
  yield takeLatest("GENERATE_REPORT", generateReport);
}

function* generateReport(action) {
  try {
    const queryString = yield Object.keys(action.payload)
      .map((key) => key + "=" + action.payload[key])
      .join("&");
    const report = yield axios.get(`/dataviz?${queryString}`);
    yield put({ type: "SET_REPORT", payload: report.data });
    const reportExport = yield axios.get(`/dataviz/export?${queryString}`);
    yield put({ type: "SET_REPORT_EXPORT", payload: reportExport.data });
    console.log('SET_REPORT_EXPORT IS', reportExport.data)
  } catch (error) {
    console.log("Error in generate report saga", error);
  }
}

export default reports;
