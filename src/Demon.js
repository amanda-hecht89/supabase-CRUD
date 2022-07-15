import React from 'react';
import { Link } from 'react-router-dom';

export default function Demon({ demonName, id, demonType, lastSeen, killMethod }) {

  return <Link to={`/demons/${id}`}>
    <p>
      {demonName} is a {demonType}. Found in {lastSeen}. Can be killed 
        by {killMethod}.
    </p>
  </Link>;
}
