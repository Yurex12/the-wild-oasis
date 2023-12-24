import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('cabins could not be found');
  }

  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('cabin could not be deleted');
  }

  return data;
}
