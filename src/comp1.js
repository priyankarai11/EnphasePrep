import React from 'react';
import { user,UserConsumer } from './ContextParent';
import { useContext } from 'react';

const Component1 = () => {
  const val=useContext(user)
  return (
    <>
      <h1>hii {val} </h1>
    
      {/* <UserConsumer>
        {(name) => {
          return <h1>hii {name} </h1>;
        }}
      </UserConsumer> */}
    </>
  );
};

export default Component1;