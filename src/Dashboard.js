import React from 'react';


import Header from './Header';
import Navigation from './Navigation';

export default class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            
                            <Header />
                            <Navigation />
                            <div>
                                {this.props.children}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
