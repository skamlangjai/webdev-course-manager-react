import React, {Component} from 'react'
import ModuleListItem from '../../components/ModuleListItem';
import ModuleService from '../../services/ModuleService'
import '../../../node_modules/font-awesome/css/font-awesome.css';
import LessonTabs from "../LessonTabs";

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: { title: '' },
            modules: [
                {title: 'Module 1', id: 123},
                {title: 'Module 2', id: 234},
                {title: 'Module 3', id: 345},
                {title: 'Module 4', id: 456},
                {title: 'Module 5', id: 567},
                {title: 'Module 6', id: 678}
            ]
        };
        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);

        this.setCourseId =
            this.setCourseId.bind(this);

        this.moduleService = ModuleService.instance;
    }
    setModules(modules) {
        this.setState({modules: modules})
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    createModule() {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.props.courseId, this.state.module)
            .then(() => {this.findAllModulesForCourse(this.props.courseId)});
    }
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }
    renderListOfModules() {
        let modules = this.state.modules.map((module) =>
        {return <ModuleListItem courseId={this.props.courseId} module={module} title={module.title}
                                   delete={this.deleteModule} key={module.id} />
        });
        return modules;
    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId, this.state.courseId)
            .then(() => { this.findAllModulesForCourse(this.state.courseId); });
    }

    render() {
        return (
            <div className="module-list-panel">

                <a className="btn backBtn" href="/courses"><i className="fa fa-chevron-circle-left fa-lg"></i> Back</a>
                {/*to be removed*/}
                {/*<h3>Module List for course: {this.state.courseId}</h3>*/}

                <div className="container no-gutters">
                    <div className="row">
                        <div className="col-lg-8">
                            <input onChange={this.titleChanged}
                                   value={this.state.module.title}
                                   placeholder="Module title"
                                   className="form-control" id="moduleTitleFld"/>
                        </div>
                        <div className="col-lg-4">
                            <button onClick={this.createModule}
                                    className="btn btn-dark">
                                <i className="fa fa-plus-square"></i>&nbsp;&nbsp;Add</button>
                        </div>
                    </div>
                </div>

                {/*<input onChange={this.titleChanged}*/}
                       {/*value={this.state.module.title}*/}
                       {/*placeholder="title"*/}
                       {/*className="form-control"/>*/}

                {/*<button onClick={this.createModule}*/}
                            {/*className="btn btn-dark">*/}
                    {/*<i className="fa fa-plus-square"></i>&nbsp;&nbsp;Add</button>*/}

                <br/>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>


                {/*<div>*/}
                    {/*<LessonTabs/>*/}
                {/*</div>*/}
            </div>

        );
    }
}

// import React from 'react'
// import ModuleListItem from '../../components/ModuleListItem';
// export default class ModuleList
//     extends React.Component {
//     render() { return (
//         <ul className="list-group">
//             <ModuleListItem/><ModuleListItem/>
//         </ul>
//     );}}
