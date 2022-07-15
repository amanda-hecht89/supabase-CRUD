import { useState, useEffect } from 'react';
import { deleteDemon, getDemonById, updateDemon } from './services/FetchUtils';
import { useHistory, useParams } from 'react-router-dom';


export default function UpdateDemonPage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [deathMethod, setDeathMethod] = useState('');
  const [killed, setKilled] = useState('');

  useEffect(() => {
    async function doFetch() {
      const monster = await getDemonById(id);
      setName(monster.demonName);
      setType(monster.demonType);
      setArea(monster.lastSeen);
      setDeathMethod(monster.killMethod);
      setKilled(monster.killedMonster);
    }
    doFetch();
  }, [id]);

  async function handleDeleteDemon() {
    await deleteDemon(id);
    push('/demons');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    await updateDemon({
      demonName: name,
      demonType: type,
      lastSeen: area,
      killMethod: deathMethod,
      killedMonster: killed,
    }, id);

    setName('');
    setType('');
    setArea('');
    setDeathMethod('');
    setKilled('');

    push('/demons');
  }


  return (
    <div>
      <header>UPDATE MONSTER DATE</header>
      <form className='editForm' onSubmit={handleSubmit}>
        <label className='labels'>
          Monster Name
          <input onChange={e => setName(e.target.value)} value={name} />
        </label>
        <label className='labels'>
          Monster Type
          <input onChange={e => setType(e.target.value)} value={type} />
        </label>
        <label className='labels'>
          Last Seen
          <input onChange={e => setArea(e.target.value)} value={area} />
        </label>
        <label className='labels'>
          How do you Kill them?
          <input onChange={e => setDeathMethod(e.target.value)} value={deathMethod} />
        </label>
        <label className='labels'>
          Are they Dead?
          <input onChange={e => setKilled(e.target.value)} value={killed} />
        </label>
        <button className='button2'>EDIT DATA</button>
      </form>
      <button className='delete' onClick={handleDeleteDemon}>DELETE DATA</button>
    </div>
  );
}
