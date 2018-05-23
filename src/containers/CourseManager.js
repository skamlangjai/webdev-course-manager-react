import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from './modules/ModuleList'
import LessonTabs from './LessonTabs'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleListItem from "../components/ModuleListItem";
import '../../node_modules/font-awesome/css/font-awesome.css';
import '../style.css'

export default class CourseManager
    extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-default">

                        <a className="navbar-brand" href="/courses"><i className="fa fa-align-left"></i>&nbsp;&nbsp;
                            Course Manager</a>

                        <form className="form-inline mx-auto">


                        </form>
                    </nav>

                    {/*<CourseList/>*/}

                    <Route path="/courses"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>

                    {/*<Route path="/examples">*/}
                    {/*<div>*/}
                    {/*<div className="card-deck">*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*</div>*/}
                    {/*<CourseEditor/>*/}
                    {/*<br/>*/}
                    {/*<LessonTabs/>*/}
                    {/*<ModuleList/>*/}
                    {/*</div>*/}
                    {/*</Route>*/}
                </div>
            </Router>
        )
    }
}