import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { changeSearchEpic, SearchEpic } from "../epics";
import skillsServiceReducers from "../reducers/skillsServiceReducers";


const reduser = combineReducers({
    skillsService: skillsServiceReducers,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
    changeSearchEpic,
    SearchEpic,
);

const epicMiddleware = createEpicMiddleware();
const store = createStore(reduser, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;
