// format the date as shown in the example
// TODO add ordinal suffix
const nth = (d) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const dateFormatter = (date) => {
  const newDate = new Date(date);
  const monthFormatted = newDate.toLocaleDateString(undefined, {
    month: "short",
  });
  const dateFormatted = newDate.getDate();
  const ordinalSuffix = nth(newDate.getDate());

  return `${monthFormatted} ${dateFormatted}${ordinalSuffix}`;
};

export const get = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
