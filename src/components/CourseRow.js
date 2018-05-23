import React from 'react';
import { Link } from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.css';
import CourseService from '../services/CourseService';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '', delete: ''};
        this.courseService = CourseService.instance;

    }


    render() {
        return (
            <div>




            <tr>
                <td>

               <Link to={`/course/${this.props.course.id}`}>
                   {this.props.course.title}
                </Link>

                &nbsp;

                </td>
                <td>
                    <button onClick={() =>
                    {this.props.delete(this.props.course.id)}}
                            className="btn btn-danger">
                        <i className="fa fa-minus-square"></i>&nbsp;&nbsp;Delete</button>
                </td>
            </tr>


            </div>
        )
    }
}
export default CourseRow;


// import React from 'react';
// class CourseRow extends React.Component {
//     render() {
//         return (
//             <tr><td>Course Row</td></tr>
//     )
//     }
//
//
// }
// export default CourseRow;
