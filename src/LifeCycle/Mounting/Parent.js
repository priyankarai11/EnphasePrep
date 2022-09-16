import React from 'react';
import Child from './getDerivedStateFromProps';
import Parnt from '../Updating/getDerivedStateFromProps';

function Parent() {
    return (
      <div>
        <Parnt name="prii" />
      </div>
    );
}

export default Parent;