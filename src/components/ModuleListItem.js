import React from 'react';
import CourseService from "../services/CourseService";
import { Link } from 'react-router-dom'
export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '', module: '', title: '', delete: ''};
        this.courseService = CourseService.instance;

    }

    render() {
        return (
            <tr>
                <Link to={`course/${this.props.courseId}/module/${this.props.module.id}`}>
                    <button type="button" className="list-group-item list-group-item-action">
                        {this.props.module.title}
                    </button>
                </Link>

                <span className="float-right">
                        <button onClick={() =>
                        {this.props.delete(this.props.module.id)}}>
                            <i className="fa fa-trash"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <i onClick={this.props.module} className="fa fa-pencil"></i>
                            </span>

            </tr>






        )
    }
}

