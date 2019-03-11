import React from 'react';
import HeaderField from './components/header/header.field';
import PageField from './components/page/page.field';

function FieldArea(props) {
  const width = 500;
  return(
    <div style={{ width }}>
      <HeaderField />
      {[1,1,1].map((i, index) => (
        <PageField key={index} index={index} />
      ))}
    </div>
  )
}
export default FieldArea;