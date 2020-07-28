import React, { useState } from "react";
import NumberFormat from "react-number-format";

import "./assets/main.css";

function App() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="App px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto text-center">
      <div className="hero">
        <div className="hero-headline">
          <h1 className="text-4xl">Calcula tu 10%</h1>
        </div>
        <div className="text-4xl">
          <NumberFormat
            className="w-full text-center border-2 border-gray-700"
            thousandSeparator={"."}
            prefix={"$"}
            decimalSeparator={","}
            placeholder="Fondos disponibles"
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
            <h3>Puedo retirar:</h3>
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
