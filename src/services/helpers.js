// format the date as shown in the example
// TODO add ordinal suffix
export const dateFormatter = (date) => {
  const newDate = new Date(date);

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

  return `${newDate.toLocaleDateString(undefined, {
    month: "short",
  })} ${newDate.getDate()}${nth(newDate.getDate())}`;
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
