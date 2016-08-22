import React, { Component } from 'react';

import Title from './Title';

class Layout extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        };

    }

    render() {
        return (
            <div className="wrapper">
                <Title />
            </div>
        );
    }
}

export default Layout;