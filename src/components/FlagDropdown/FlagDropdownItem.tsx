import React from 'react';

const FlagDropdownItem = (item) => {
  return (
    <>
      <img src={item.flag} alt='Country flag' className='dropdown__flag' />
      <p className='dropdown__title'>{item.value}</p>
    </>
  );
};

export { FlagDropdownItem };
