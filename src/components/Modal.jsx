import React from 'react';
import { Modal as ModalBase } from 'antd';

const Modal = props => (
  <ModalBase size="small" {...props}>
    {props.children}
  </ModalBase>
);

export default Modal;
