import React from 'react';
import PageHeaderContainer from '../../containers/PageHeaderContainer';
import UserFormContainer from '../../containers/UserFormContainer';

const RegistrationPage = () => (
  <>
    <PageHeaderContainer />
    <UserFormContainer isRegistration={true} />
  </>
)

export default RegistrationPage;
