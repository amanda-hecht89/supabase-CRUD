import { client } from './client';

export async function createDemon(demon) {
  const { data } = await client.from('demons').insert(demon).single();

  return data;
}

export async function getDemons() {
  const { data } = await client.from('demons').select('*');

  return data;
}

export async function updateDemon(demon, id) {
  const { data } = await client.from('demons').update(demon).match({ id : id }).single();

  return data;
}

export async function deleteDemon(id) {
  const { data } = await client.from('demons').delete.match({ id : id }).single();

  return data;
}

export async function getDemonById(id) {
  const { data } = await client.from('demons').select('*').match({ id }).single();

  return data;
}

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password
  });
  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password
  });
  return user;
}