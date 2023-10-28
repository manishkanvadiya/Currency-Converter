import React, { useId } from "react";

const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currenctOptions = [],
  selectCurrency,
  amountDisable = false,
  currenctDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div
      className={`bg-white p-3 text-sm flex justify-between rounded-md ${className}`}
    >
      <div className="w-1/2">
        <label htmlFor={amountInputId}>{label}</label>
        <input
          required
          type="number"
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 appearance-none m-0"
          placeholder={`${label} amount`}
          disabled={amountDisable}
          value={amount ? amount : ""}
          autoFocus
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="W-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="p-1 bg-gray-100 cursor-pointer outline-none uppercase"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currenctDisable}
        >
          {currenctOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
