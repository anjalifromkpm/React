import React from 'react';

const Title = () => {
    console.log('Rendering Title');
  return (<>
    <h1>Title</h1>
  </>)
}

export default React.memo(Title);