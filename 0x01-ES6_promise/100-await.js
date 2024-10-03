import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let mic = {};

  try {
	  const photo = await uploadPhoto();
    const user = await createUser();
    mic = { photo, user };
  } catch (err) {
    mic = { photo: null, user: null };
  }
	return mic;
}
