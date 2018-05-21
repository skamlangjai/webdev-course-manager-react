import React from 'react';
import ReactDOM from 'react-dom';
// import CourseManager from './containers/CourseManager';
import CourseList from './CourseList';

class CourseManager extends React.Component {

      render() {
          return (
            <div>
               <h1>Course Manager</h1>
                <CourseManager/>
                document.getElementById('root')
               <CourseList/>
            </div>
      )}

      courseRows() {
    	   return (
    	       <tr><td>Course Row</td></tr>
    	   )
    	}

   
   // ReactDOM.render(
	// 	   <h1>Course Manager</h1>;
	// 	   <CourseManager/>;
	// 	   document.getElementById('root')
	// 	);
}
export default CourseManager;