import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchQuestionsSaga from './questions.saga';
import studentSaga from './student.saga';
import postScoresSaga from './scores.saga';
import fetchBatchSaga from './fetchBatch.saga';
import adminScores from './adminScores.saga';
import reports from './reports.saga';
import schools from './schools.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchQuestionsSaga(),
    studentSaga(),
    postScoresSaga(),
    fetchBatchSaga(),
    adminScores(),
    reports(),
    schools()
  ]);
}
