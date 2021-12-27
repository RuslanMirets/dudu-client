import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const ContactsPage: NextPage = () => {
  return (
    <MainLayout title="Контакты">
      <div className="container">Контакты</div>
    </MainLayout>
  );
};

export default ContactsPage;
