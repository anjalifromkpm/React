import React from 'react';

function One(props) {
    console.log('memo is rendering')
    return (
        <div>
            {props.name}
        </div>
    )
}

export default React.memo(One);
