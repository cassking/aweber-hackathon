import React from 'react';
import {Link} from 'react-router';

const CauseIndexTile = (props) => {
  return(
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 classNameName="card-title">{props.name}</h5>
          <a href={`/causes/${props.id}`} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    )}

export default CauseIndexTile;
