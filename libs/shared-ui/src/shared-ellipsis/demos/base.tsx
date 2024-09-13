import { SharedEllipsis } from '@shared/ui';
import { Divider } from 'antd';
import React from 'react';
export default () => (
  <div>
    <div style={{ width: '100px', overflow: 'hidden' }}>
      <SharedEllipsis text="较短的文本" />
    </div>
    <Divider />
    <div style={{ width: '100px', overflow: 'hidden' }}>
      <SharedEllipsis text="较长的文本较长的文本较长的文本较长的文本较长的文本较长的文本较长的文本" />
    </div>
  </div>
);
