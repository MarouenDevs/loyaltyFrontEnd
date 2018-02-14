import React from 'react';
import Well from "react-bootstrap/es/Well";


const Legend = (props) => (
   <Well >

       <h3>legend of status</h3>
       <p><span className="label label-default">Bronze</span>: <small> NB rides between 0 and 20 </small></p>
       <p><span className="label label-primary">Silver</span>: <small> NB rides between 20 and 50</small></p>
       <p><span className="label label-warning">Gold</span>: <small>NB rides between 50 and  100 </small></p>
       <p><span className="label label-info">Platinuim</span>:<small> NB rides highter than 100 </small></p>
   </Well>
);

export default Legend;