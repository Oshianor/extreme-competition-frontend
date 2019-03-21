import React from 'react';
import HeaderField from './components/header/header.field';
import PageField from './components/page/page.field';
import { connect } from 'react-redux';


function FieldArea(props) {
  const width = 500;
  const { builder } = props;
  return(
    <div style={{ width }}>
      <HeaderField />
      {
        builder.page.map((i, index) => (
          <PageField key={index} pageNo={index} page={i} />
        ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    builder: state.builder
  }
}

export default connect(mapStateToProps, )(FieldArea);