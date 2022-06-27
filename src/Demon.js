import React from 'react';
import { Link } from 'react-router-dom';

export default function Demon({ monster }) {
  return <Link to={`/demons/${monster.id}`}>
    <p>
      {monster.name} is a {monster.type}. Found in {monster.area}. Can be killed 
        by {monster.deathMethod}.
    </p>
  </Link>;
}
