import { useEffect, useState } from 'react';
import { getDemons } from './services/FetchUtils';
import { Demon } from './Demon';



export default function DemonListPage() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const monsters = await getDemons();
      setMonsters(monsters);
    }
    doFetch();
  }, []);

  return (
    <div monsterList>
      {
        monsters.map((monster, i) => <Demon monster={monster} key={monster.name + monster.type + monster.area + monster.deathMethod + monster.killed + i} />)
      }
    </div>
  );
}
