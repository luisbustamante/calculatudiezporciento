import React, { useState } from "react";
import NumberFormat from "react-number-format";

import "./assets/main.css";

function App() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="App bg-hero-signal">
      <div className="flex flex-col items-center justify-center min-h-screen py-8">
        <h1 className="text-6xl">Calcula tu 10%</h1>
        <div className="flex flex-col items-center justify-center text-6xl">
          <NumberFormat
            className="text-center border-2 border-gray-700"
            thousandSeparator={"."}
            prefix={"$"}
            decimalSeparator={","}
            onValueChange={(values) => {
              const { value } = values;
              const saldo = parseFloat(value);
              if (saldo <= 1000000) {
                setAmount(saldo);
              } else if (saldo > 1000000 && saldo <= 10000000) {
                setAmount(1000000);
              } else if (saldo > 10000000) {
                setAmount(Math.min(saldo * 0.1, 4300000));
              }
            }}
          />
          <div>
            {Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
            }).format(amount)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
