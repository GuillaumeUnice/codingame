namespace TheRiverI {
  const nextRiverNumber = a => {
    return (
      parseInt(a, 10) +
      a
        .toString()
        .split('')
        .reduce((acc, cur) => acc + parseInt(cur, 10), 0)
    );
  };

  const riverMeetingpoint = (a, b) => {
    if (parseInt(a) === parseInt(b)) return a;
    return parseInt(a, 10) < parseInt(b, 10)
      ? riverMeetingpoint(nextRiverNumber(a), b)
      : riverMeetingpoint(a, nextRiverNumber(b));
  };

  console.log(riverMeetingpoint('32', '47'));
}
