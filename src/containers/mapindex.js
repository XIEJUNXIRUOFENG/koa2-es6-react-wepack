import React from 'react';
import { Map } from 'react-amap';
import '../theme/mapindex.less';

class MapIndex extends React.Component {

  render(){
    return (
      <div>
        <div style={{width: '100%', height: '600px'}}>
          <Map 
            plugins={['ToolBar']}
            amapkey={'8f2aa07f7eda5352b00015775eabcd1d'}
          />
        </div>
      </div>
    )}
}

export default MapIndex;


