import React, { Component } from 'react'
import '../theme/card.less';

export default class Card extends Component {

  render() {
    const {title, className, children} = this.props;
    let clazz = 'card';
    if (className) clazz += ' ' + className;
    return (
      <div className={clazz}>
        <h4>{title}</h4>
        {children}
      </div>
    );
  }
}