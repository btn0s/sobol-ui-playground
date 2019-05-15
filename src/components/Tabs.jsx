import React from 'react';
import { Tabs as TabsBase } from 'antd';

const Tabs = props => (
  <TabsBase {...props} type="card">
    {props.children}
  </TabsBase>
);

export const TabPane = TabsBase.TabPane;
export default Tabs;
