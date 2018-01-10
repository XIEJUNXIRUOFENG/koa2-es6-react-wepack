import React from 'react';
import { Map } from 'react-amap';
import '../theme/mapindex.less';

class MapIndex extends React.Component {

  render(){
    const plugins = [
      'MapType',
      'Scale',
      'OverView',
      {
        name: 'ToolBar',
        options: {
          visible: true,  // 不设置该属性默认就是 true
          onCreated(ins){
            console.log(ins);
          },
        },
      }
    ]
    return (
      <div>
        <div style={{width: '100%', height: '600px'}}>
          <Map 
            plugins={ plugins }
            amapkey={'8f2aa07f7eda5352b00015775eabcd1d'}
          />
        </div>
      </div>
    )}
}

export default MapIndex;


