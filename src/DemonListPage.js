import { useEffect, useState } from 'react';
import { getDemons } from './services/FetchUtils';
import Demon from './Demon';



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
    <div className={'monsterList'}>
      {
        monsters.map((monster, i) => <Demon demonName={monster.demonName} demonType={monster.demonType} lastSeen={monster.lastSeen} killMethod={monster.killMethod} id={monster.id} key={monster.demonName + monster.demonType + monster.lastSeen + monster.killMethod + monster.killedMonster + i} />)
      }
    </div>
  );
}
