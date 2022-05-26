import { useEffect, useState } from 'react';
import getAdvice from '../helpers/adviceSlipAPI';
import Iadvice from '../interfaces/Iadvice';
import PatternDivider from '../assets/images/pattern-divider-desktop.svg';
import Dice from '../assets/images/icon-dice.svg';

export default function CardAdvice() {
  const [advice, setAdvice] = useState<Iadvice | undefined>();

  useEffect(() => {
    async function fetchAPI() {
      const advice = await getAdvice();
      setAdvice(advice);
    }
    fetchAPI();
  }, []);

  const handleClick = async () => {
    const advice = await getAdvice();
    setAdvice(advice);
  };

  return advice ? (
    <div className="card-content">
      <h1>ADVICE #{advice.id}</h1>
      <p>"{advice.advice}"</p>
      <img src={PatternDivider} alt="Separator" className="divider" />
      <button onClick={handleClick}>
        <img src={Dice} alt="Dice Button" />
      </button>
    </div>
  ) : (
    <div />
  );
}
