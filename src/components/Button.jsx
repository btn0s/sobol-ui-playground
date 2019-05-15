import React from 'react';
import { Button as ButtonBase } from 'antd';

const Button = props => <ButtonBase {...props}>{props.children}</ButtonBase>;

export default Button;
