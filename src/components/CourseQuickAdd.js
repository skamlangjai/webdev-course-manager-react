import React from 'react';
import { Link } from 'react-router-dom'

class CourseQuickAdd extends React.Component {
    constructor(props) {
        super(props)
    }

    // render() {
    //     return (
    //         <div className="form-row align-items-center">
    //             <div className="col-auto">
    //                 <label className="sr-only" htmlFor="inlineFormInput">Name</label>
    //                 <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="New Course Title">
    //                 </input>
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <form className="form-inline float-left">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}
export default CourseQuickAdd;