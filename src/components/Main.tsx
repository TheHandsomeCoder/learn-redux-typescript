import * as React from 'react';
import { Link } from 'react-router-dom';

const Main = React.createClass({
    render() {
        return (
           <div>
               <h1><Link to="/">Redixstagram</Link></h1>
           </div>
        );
    }
});

export default Main;