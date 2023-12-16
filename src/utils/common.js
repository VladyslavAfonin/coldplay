import { MAIN_URL } from "./constants";

export const request = async (query) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await result.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const sortByDate = (dates) => {
  return dates.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getLocalDateString = (
  date,
  { month = "numeric", day = "numeric", year = "numeric" }
) => {
  return new Date(date).toLocaleDateString("en-EN", {
    month,
    day,
    year,
  });
};
