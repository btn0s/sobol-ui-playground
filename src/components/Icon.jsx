import React from 'react';
import { Icon as IconBase } from 'antd';
import * as FeatherIcons from 'react-feather';

import './Icon.less';

const Icon = props => {
  const _isFeatherIconValid = FeatherIcons[props.type] !== undefined;

  return (
    <IconBase
      component={_isFeatherIconValid ? FeatherIcons[props.type] : FeatherIcons['Airplay']}
      theme="outlined"
      className="sobol-icon"
    />
  );
};

export default Icon;
