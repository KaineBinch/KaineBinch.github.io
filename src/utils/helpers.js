export const getAge = () => {
  const currentDate = new Date();
  const birthday = new Date('6/24/1996');
  const age = currentDate.getFullYear() - birthday.getFullYear();

  return currentDate.getMonth() < birthday.getMonth() ||
    (currentDate.getMonth() === birthday.getMonth() &&
      currentDate.getDate() < birthday.getDate())
    ? age - 1 : age
}

