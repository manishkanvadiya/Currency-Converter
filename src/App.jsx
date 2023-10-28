import React, { useState } from "react";
import { Input } from "./components";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const bgImg =
    "https://img.freepik.com/free-photo/russian-ruble-falls-out-column-coins-against-background-exchange-rate-chart-economic-sanctions-economic-crisis-space-text-idea-banner-news_166373-2656.jpg?w=1060&t=st=1698506546~exp=1698507146~hmac=a1a117abecc37b569d048b3c92410ed5e04e09dedd06fa19696fe71ab9848af3";
  const currencyInfo = useCurrency(from);

  const date = currencyInfo.date;
  const options = Object.keys(currencyInfo.data);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo.data[to]);
  };
  const removeCurrenctHandler = (e) => {
    e.preventDefault();
    setAmount("");
    setConvertedAmount("");
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 p-5 py-6 backdrop-blur-sm bg-white/30 rounded-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currenctOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="ralative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white  bg-blue-600 text-white px-2 py-1 text-sm rounded-md"
                onClick={swap}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full  mb-4">
              <Input
                label="To"
                amount={convertedAmount ? convertedAmount.toFixed(2) : ""}
                currenctOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-md"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
              <button
                onClick={removeCurrenctHandler}
                className="bg-red-500 p-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className="mt-3 text-right uppercase text-xs	">
            last Updated on <b>{date}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
