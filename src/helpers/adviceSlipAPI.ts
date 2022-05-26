import Iadvice from '../interfaces/Iadvice';

export default async function getAdvice(): Promise<Iadvice> {
  return fetch('https://api.adviceslip.com/advice').then((response) =>
    response
      .json()
      .then((advice) =>
        response.ok ? Promise.resolve(advice.slip) : Promise.reject(advice),
      ),
  );
}
