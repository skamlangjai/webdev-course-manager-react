import React from 'react'
import ModuleService from '../../services/ModuleService'
import ModuleList from './ModuleList'
import CourseService from "../../services/CourseService";

export default class ModuleEditor
    extends React.Component {constructor(props) {
    super(props);
    this.state = {moduleId: ''};
    this.selectModule = this.selectModule.bind(this);
    this.moduleService = ModuleService.instance;
}

    componentDidMount() {
        this.selectModule
        (this.props.match.params.moduleId);
        // (this.props.match.params.title);
    }

    selectModule(moduleId) {
        // let title = this.courseService.findCourseTitle(courseId);

        this.setState({moduleId: moduleId});
    }

    // render() { return(
    //     <div>
    //         <div className="alert alert-primary" role="alert">
    //             <i className="fa fa-info-circle fa-lg"></i>&nbsp;&nbsp;
    //             You are editing course: ({this.state.courseId})
    //
    //         </div>
    //
    //         <div className="row">
    //             <div className="col-4">
    //                 <ModuleList courseId={this.state.courseId}/>
    //             </div>
    //             <div className="col-8">
    //                 <LessonTabs/>
    //             </div>
    //         </div>
    //     </div>
    // );}}

}

