const calculateDash = (num: number) => {
  let dash = num * 5;
  let gap = num * 2;

  if (num >= 5) {
    dash = num * 7;
    gap = num * 1;
  }

  const dashArr = [dash, gap];

  return dashArr;
};

export default calculateDash;
