import React from 'react';
import { connect } from 'react-redux';

const PageHeader = ({ currentUser }) => {
  return (
    <header>
      <p>Simple blog </p>
      <p>{currentUser}</p>
    </header>
  )
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(PageHeader);