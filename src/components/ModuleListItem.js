import React from 'react';
export default class ModuleListItem
    extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                {/*icons*/}
                Module 1
                <li className="list-group-item">
                    Module Title
                    <span class="float-right">
                    <i className="fa fa-trash"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-pencil"></i>
                </span>
                </li>
            </li>
        )
    }
}

