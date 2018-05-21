import React from 'react';
// import ReactDOM from 'react-dom';
// import CourseManager from './containers/CourseManager';
// import CourseList from './CourseList';
import ModuleList from './modules/ModuleList'
import CourseCard from '../components/CourseCard'
import LessonTabs from './LessonTabs'

export default class CourseManager
    extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <LessonTabs/>
                <ModuleList/>
                <ModuleList/>
                <ModuleList/>
                <ModuleList/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}

// class CourseManager extends React.Component {
//
//       render() {
//           return (
//             <div>
//                <h1>Course Manager</h1>
//                 <CourseManager/>
//                 document.getElementById('root')
//                <CourseList/>
//             </div>
//       )}
//
//       courseRows() {
//     	   return (
//     	       <tr><td>Course Row</td></tr>
//     	   )
//     	}
//
//
//    // ReactDOM.render(
// 	// 	   <h1>Course Manager</h1>;
// 	// 	   <CourseManager/>;
// 	// 	   document.getElementById('root')
// 	// 	);
// }
// export default CourseManager;