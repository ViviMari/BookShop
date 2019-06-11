import React from 'react';
import { Link } from 'react-router-dom';


export default class Navigation extends React.Component {
    render() {
        return (
            <>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link " to="/book/search">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/books">Produkte</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/book/new">Buch hinzufügen</Link>
                    </li>

                </ul>
 
            </>
        );
    }
}
