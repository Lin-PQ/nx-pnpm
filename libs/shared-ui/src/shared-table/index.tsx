import { Button } from 'antd';
import React from 'react';
const Table: React.FC<{ title: string }> = (props) => (
  <h4>
    {props.title}
    <Button>999</Button>
  </h4>
);

export default Table;
