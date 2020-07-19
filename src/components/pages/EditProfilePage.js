import React from 'react';
import PageHeader from '../../containers/PageHeader';
import UserFormContainer from '../../containers/UserFormContainer';

const RegistrationPage = () => (
  <>
    <PageHeader />
    <UserFormContainer isRegistration={false} />
  </>
)

export default RegistrationPage;
