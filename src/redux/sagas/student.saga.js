import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { HashRouter as Router, useHistory } from 'react-router-dom';
import { connectAdvanced } from 'react-redux';


function* getStudents() {
    try {
      const students = yield axios.get('/api/student');
      yield put({ type: 'SET_STUDENTS', payload: students.data });
    } catch (error) {
      alert('Error sending job:', error);
  
    }
  }
  function* csvStudents(action) {
    try {
      console.log('inside csvStudents SAGA, payload is:',action.payload)
      yield axios.post('/api/studentCsv', action.payload);
      yield put({ type: 'GET_STUDENTS' });
    } catch (error) {
      alert('Error sending students:', error);
  
    }
  }

  function* studentDetails(){
    try {
      const studentDetails = yield axios.get('/api/admin/cohort/studentDetails');
      yield put({ type: 'SET_DETAILS', payload: studentDetails.data });
    } catch (error) {
      alert('Error getting student name:', error);
  
    }
  }


  function* studentSaga() {
    yield takeLatest('GET_STUDENTS', getStudents)
    yield takeLatest('CSV_STUDENTS', csvStudents)
    yield takeLatest('GET_STUDENT_DETAILS', studentDetails)
  }
  
  export default studentSaga;
  