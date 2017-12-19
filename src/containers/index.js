import React from 'react';
import ReactDOM from 'react-dom';
import MapIndex from './mapindex';

class Index extends React.Component {
    render() {
        return (
            <div className='body-content'>
                <div className='header-start'>地图-天气</div>
                <MapIndex />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))