import { useState, useEffect } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data[currency]);
        setDate(data.date);
      });
  }, [currency]);
//   console.log(date);
  return { data, date };
}

export default useCurrency;
