import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  const array = [];
  res.forEach((response) => {
    if (response.status === 'fulfilled') {
      array.push({ status: response.status, value: response.value });
    } else { array.push({ status: response.status, value: response.reason }); }
  });
  return array;
}
