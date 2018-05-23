// import React from 'react';
import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';
import '../../node_modules/font-awesome/css/font-awesome.css';
import '../style.css'


class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.lastModified = this.lastModified.bind(this);
    }
    componentDidMount() {
        this.findAllCourses();
    }
    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            })
    }

    renderCourseRows() {
        let courses = null;

        console.log("render course rows");
        console.log(this.state);
        if(this.state) {
            courses = this.state.courses.map(
                ((course) => {
                    return <CourseRow course={course} key={course.id}
                                       delete={this.deleteCourse}/>
                }
            ))
        }
        return (
            courses
        )
    }
    titleChanged(event) {
        console.log("title being changed..");
        this.setState({
            course: { title: event.target.value }
        });
    }

    lastModified(event) {
        console.log("date being changed..");
        this.setState({
            course: { modified: event.target.value }
        });
    }

    createCourse() {
        console.log("course being created..");
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });

    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses(); });
    }


    render() {
        return (
            <div>
                <div className="container no-gutters">
                    <div className="row add-header">
                        <div className="col-lg-10 titleFldDiv">
                            <input onChange={this.titleChanged}
                            className="form-control" id="titleFld"
                            placeholder="New Course Title"/>
                            </div>
                        <div className="col-lg-2 createBtn">
                            <button onClick={this.createCourse}s
                                    className="btn btn-success">
                                <i className="fa fa-plus-square"></i>&nbsp;&nbsp;Add</button>
                        </div>
                    </div>
                </div>
            <table className="table">

            <thead>

            {/*<tr className="titleFldDiv">*/}

                {/*<th><input onChange={this.titleChanged}*/}
                           {/*className="form-control" id="titleFld"*/}
                           {/*placeholder="New Course Title"/></th>*/}

                {/*<th><button onClick={this.createCourse}*/}
                            {/*className="btn btn-success">*/}
                    {/*<i className="fa fa-plus-square"></i>&nbsp;&nbsp;Add</button></th>*/}
            {/*</tr>*/}




            {/*<div className="container">*/}
                {/*<div className="row">*/}
                    {/*<div className="col-8">*/}
                        {/*<input onChange={this.titleChanged}*/}
                                   {/*className="form-control" id="titleFld"*/}
                                   {/*placeholder="New Course Title"/>*/}
                    {/*</div>*/}
                    {/*<div className="addBtn col-4">*/}
                        {/*<button onClick={this.createCourse}*/}
                                {/*className="btn btn-success">*/}
                            {/*<i className="fa fa-plus-square"></i>&nbsp;&nbsp;Add</button>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}

            <tr>
                <th className='head-bar'>Title</th>
                <th className='head-bar'>Owned By</th>
                <th className='head-bar'>Last modified by me</th>
            </tr>
            </thead>
            <tbody>
            {this.renderCourseRows()}
            </tbody>
        </table></div>)

    }
}
export default CourseList;

// import CourseService from '../services/CourseService';
// import CourseRow from '../components/CourseRow';
//
// class CourseList extends React.Component {
//
//     constructor() {
//         super();
//         this.courseService = CourseService.instance;
//         this.state = {courses: []};
//     }
//
//     componentDidMount() {
//         this.courseService.findAllCourses()
//             .then((courses) => {
//                 this.setState({courses: courses});
//             });
//     }
//
//         render()
//         {
//             return (
//                 <div>
//                     <h2>Course List</h2>
//                     <table>
//                         <thead>
//                         <tr>
//                             <th>Title</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         <CourseRow/>
//                         <CourseRow/>
//                         <CourseRow/>
//                         </tbody>
//                     </table>
//                 </div>
//             )
//         }
//
//
//         /*<div>*/
//
//         /*<h2>Course List</h2>*/
//
//         /*<table>*/
//
//         /*<thead><tr><th>Title</th></tr></thead>*/
//
//         /*<tbody>*/
//
//         /*<CourseRow/>*/
//
//         /*<CourseRow/>*/
//
//         /*<CourseRow/>*/
//
//         /*</tbody>*/
//
//         /*</table>*/
//
//         /*</div>*/
//
//
//
// }
//
// export default CourseList
