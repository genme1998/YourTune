import './reactStyle.css';
import React from 'react';
import CompanyLabel from './CompanyLabel';
import Dashboard from './Dashboard';

const DivHolder = ({aiMessage1}) => {
  return (
    <>
      
    <CompanyLabel/>
    <Dashboard aiMessage1={aiMessage1} />
    
    </>
  );
};

export default DivHolder;