import React from 'react';
import ReactDOM from 'react-dom'

class MapIndex extends React.Component {
  componentDidMount() {
    var map = new AMap.Map('container',{
      resizeEnable: true,
      zoom: 10,
      center: [116.480983, 40.0958]
  });
  }

  render() {
    return (
      <div className='body-content'>
        <div className='header-start'>地图-天气</div>
        <div id='container' tabindex="0"></div>
      </div>
    )
  }
}

ReactDOM.render(<MapIndex />,document.getElementById('root')
);
