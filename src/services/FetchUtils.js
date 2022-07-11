import { client } from './client';

export async function createDemon(demon) {
  const { data } = await client.from('Demon_Data').insert(demon).single();

  return data;
}

export async function getDemons() {
  const { data } = await client.from('Demon_Data').select('*');

  return data;
}

export async function updateDemon(demon, id) {
  const { data } = await client.from('Demon_Data').update(demon).match({ id : id }).single();

  return data;
}

export async function deleteDemon(id) {
  const { data } = await client.from('Demon_Data').delete.match({ id : id }).single();

  return data;
}

export async function getDemonById(id) {
  const { data } = await client.from('Demon_Data').select('*').match({ id }).single();

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