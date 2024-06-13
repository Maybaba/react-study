import React from "react";
import Card from './UI/Card.js';

const Greet = (cccc) => {

    return (
      <Card className='boader-blue'>
          <>
          <div>
            <h1>Hello REACT@@@</h1>
            {cccc.children}
          </div>
          </>
      </Card>
    );
};

export default Greet;