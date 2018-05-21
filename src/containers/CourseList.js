import React from 'react';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {

    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });

        render() {
        return (
            <h2>Course List</h2>
    )};

    <div>
        <h2>Course List</h2>
        <table>
            <thead><tr><th>Title</th></tr></thead>
            <tbody>
                <CourseRow/>
                <CourseRow/>
                <CourseRow/>
            </tbody>
        </table>
    </div>

}

export default CourseList;