import { useState } from 'react';
import { createDemon } from './services/FetchUtils';
import { useHistory } from 'react-router-dom';

export default function CreateDemonPage() {
  const { push } = useHistory; 
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [deathMethod, setDeathMethod] = useState('');
  const [killed, setKilled] = useState('');
  const [submit, setSubmit] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const monster = await createDemon({
      demonName: name,
      demonType: type,
      lastSeen: area,
      killMethod: deathMethod,
      killedMonster: killed,
      user_id: submit,
    });

    setName(''); setType(''); setArea('');
    setDeathMethod(''); setKilled(''); setSubmit('');

    push('/demons');
  }

  return (
    <div>
      <header>MONSTER CATALOG</header>
      <form onSubmit={handleSubmit}>
        <label className='label'>
          Monster Name
          <input onChange={e => setName(e.target.value)} value={name} />
        </label>
        <label className='label'>
          Monster Type
          <input onChange={e => setType(e.target.value)} value={type} />
        </label>
        <label className='label'>
          Last Seen
          <input onChange={e => setArea(e.target.value)} value={area} />
        </label>
        <label className='label'>
          How do you Kill them?
          <input onChange={e => setDeathMethod(e.target.value)} value={deathMethod} />
        </label>
        <label className='label'>
          Are they Dead?
          <input onChange={e => setKilled(e.target.value)} value={killed} />
        </label>
        <label className='label'>
          Entry Author
          <input onChange={e => setSubmit(e.target.value)} value={submit} />
        </label>
        <button className='button'>ENTER DATA</button>
      </form>
    </div>
  );
}
