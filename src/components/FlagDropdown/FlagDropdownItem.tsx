import React from 'react';

const FlagDropdownItem = (item) => {
  return (
    <>
      <img
        src={item.flag}
        width='26px'
        height='18px'
        alt='Country flag'
        className='dropdown__flag'
      />
      <p className='dropdown__title'>{item.value}</p>
    </>
  );
};

export { FlagDropdownItem };
