import { useState } from 'react';
// import './Calculadora.css'; // Opcional, si decides añadir estilos

function Calculadora() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const res = parseFloat(numero1) + parseFloat(numero2);
    setResultado(res);
  };
  const raiz_cuadrada = () => {
    const raiz = parseFloat(numero1) ** 0.5;
    setResultado(raiz.toFixed(2));
  };

  function restar() {
    const res = parseFloat(numero1) - parseFloat(numero2);
    setResultado(res);
  }

  const multiplicar = () => {
    const res = parseFloat(numero1) * parseFloat(numero2);
    setResultado(res);
  };

  const dividir = () => {
    if (parseFloat(numero2) === 0) {
      setResultado('Error: División por cero');
    } else {
      const res = parseFloat(numero1) / parseFloat(numero2);
      setResultado(res.toFixed(2));
    }
  };

  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  return (
    <div className="calculadora">
      <h2>Calculadora Básica</h2>
      <div className="inputs">
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
          placeholder="Número 2"
        />
      </div>
      <div className="botones">
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>
        <button onClick={raiz_cuadrada}>raiz</button>

        <button onClick={limpiar}>Limpiar</button>
      </div>
      {resultado !== null && (
        <div className="resultado">
          <h3>Resultado: {resultado}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
