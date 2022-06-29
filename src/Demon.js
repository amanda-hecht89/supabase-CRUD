import React from 'react';
import { Link } from 'react-router-dom';

export default function Demon({ name, id, type, area, deathMethod }) {
  return <Link to={`/demons/${id}`}>
    <p>
      {name} is a {type}. Found in {area}. Can be killed 
        by {deathMethod}.
    </p>
  </Link>;
}
