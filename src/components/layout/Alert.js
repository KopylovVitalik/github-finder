import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" style={{ marginRight: '5px' }} />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
