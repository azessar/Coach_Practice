export const makeQueryParams = (
  sport: string,
  metro: string,
  coachName: string
) => {
  let answer = "";
  if (sport.length > 0) {
    answer = answer + `sport=${sport}`;
    if (metro.length > 0 || coachName.length > 0) {
      answer = answer + "&";
    }
  }

  if (metro.length > 0) {
    answer = answer + `city=${metro}`;
    if (coachName.length > 0) {
      answer = answer + "&";
    }
  }
  if (coachName.length > 0) {
    answer = answer + `name=${coachName}`;
  }
  return answer;
};
