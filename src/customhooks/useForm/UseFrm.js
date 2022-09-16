
import React,{ useState } from 'react';
import { useForm } from './useForm';

function UseFrm() {
  
    const [first, bindFirst] = useForm('')
    const [last, bindLast] = useForm('');

    const submit = () => {
        console.log(first, last)
    }
    return (
      <div>
        <div>
          <label>FirstName</label>
          <input
            type="text"
           {...bindFirst}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
           {...bindLast}
          />
        </div>
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </div>
    );
}

export default UseFrm;