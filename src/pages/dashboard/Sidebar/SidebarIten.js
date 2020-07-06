import React from 'react';
import { Link } from 'react-router-dom';

const SidebarIten = ({icon,text, path}) => {
    return (
        <div>
            <li className="nav-item">
                <Link className="nav-link d-flex" to={path}>
                    <span className="material-icons">
                        {icon}
                    </span>
                    <span>
                        {text}
                    </span>
                </Link>
            </li>
        </div>
    );
};

export default SidebarIten;