import React, { useEffect, useRef, useState } from 'react';

import { Tooltip } from 'antd';

interface SharedEllipsisProps {
  /**
   * 展示的文本
   */
  text: string;
}

/**
 * 超出显示标题,否则不显示
 * 该组件需要父组件拥有宽度且overflow:hidden
 * 存在多个Ref实例及监听事件,花销较大,不建议同一屏挂载多个元素
 * @param param0
 * @returns
 */
const Ellipsis: React.FC<SharedEllipsisProps> = ({ text }) => {
  const textContainerRef = useRef<any>();

  const getWidth = () => ({ width: window.innerWidth });

  const [windowWidth, setWindowWidth] = useState(getWidth());

  const [textScrollWidth, setTextScrollWidth] = useState(0);

  const [textClientWidth, setTextClientWidth] = useState(0);

  useEffect(() => {
    const widthSize = () => {
      setWindowWidth(getWidth());
    };
    window.addEventListener('resize', widthSize);
    return () => {
      window.removeEventListener('resize', widthSize);
    };
  }, []);

  useEffect(() => {
    setTextClientWidth(textContainerRef?.current?.clientWidth);
    setTextScrollWidth(textContainerRef?.current?.scrollWidth);
  }, [windowWidth, text]);

  return (
    <Tooltip title={textScrollWidth > textClientWidth ? text : undefined}>
      <div
        className="truncate max-w-full"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '100%',
        }}
        ref={textContainerRef}
      >
        {text}
      </div>
    </Tooltip>
  );
};

export default Ellipsis;
