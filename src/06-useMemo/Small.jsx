import React, { memo } from 'react';

const Small = ({ value }) => {
    console.log({value});

    return (
        <small> { value } </small>
    )
}

export default memo(Small);