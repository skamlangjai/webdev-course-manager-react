import React from 'react'
import ModuleList from './modules/ModuleList'
import LessonTabs from './LessonTabs'
import CourseService from "../services/CourseService";
import '../../node_modules/font-awesome/css/font-awesome.css';

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
        this.courseService = CourseService.instance;
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
        // (this.props.match.params.title);
    }

    selectCourse(courseId) {
        // let title = this.courseService.findCourseTitle(courseId);

        this.setState({courseId: courseId});
    }



    render() { return(
        <div>
            <div className="alert alert-primary" role="alert">
                <i className="fa fa-info-circle fa-lg"></i>&nbsp;&nbsp;
                You are editing course: ({this.state.courseId})

            </div>

            <div className="row">
                <div className="col-4">
                    <ModuleList courseId={this.state.courseId}/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                </div>
            </div>
        </div>
    );}}


// import React from 'react'
// import ModuleList from './modules/ModuleList'
// import LessonTabs from './LessonTabs'
//
// export default class CourseEditor
//     extends React.Component {
//     render() { return(
//         <div className="row">
//             <div className="col-4">
//                 {/*<h2>Left 1/3</h2>*/}
//                 <ModuleList/>
//             </div>
//             <div className="col-8">
//                 {/*<h2>Right 2/3</h2>*/}
//                 <LessonTabs/>
//             </div>
//         </div>
//
//     );}}
