import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
	.all([uploadPhoto(), createUser()])
    .then((mic) => {
      console.log(`${mic[0].body} ${mic[1].firstName} ${mic[1].lastName}`);
    })
	.catch(() => console.log('Signup system offline'));
}
