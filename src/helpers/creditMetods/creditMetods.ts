import { IStateReducer } from 'state/stateReducer';
import { DefaultCreditRate, TCreditPeriodItem } from '../constants/CreditData';

// функция работает при первом включении
export const getFullRate = (refinancingRate: number) =>
  refinancingRate + DefaultCreditRate;

// подсчет месячного процента
const getPercentage = (rate: number) => {
  return rate > 0 ? rate / 100 / 12 : 0;
};

// подсчет месчного платежа (ссылку на формулу см в readme.md)
const getMonthlyPayment = (sum: number, period: number, percentage: number) => {
  if (percentage === 0) return 0;

  const result =
    sum * (percentage + percentage / ((1 + percentage) ** period - 1));

  return result;
};

// подсчет общего платежа
const getTotalAmount = (monthlyPayment: number, period: number) => {
  return monthlyPayment > 0 ? monthlyPayment * period : 0;
};

// подсчет переплаты
const getTotalOverPayment = (sum: number, totalAmount: number) => {
  return totalAmount > 0 ? totalAmount - sum : 0;
};

export interface IGetCalculationCreditInfo {
  monthlyPayment: number;
  totalAmount: number;
  totalOverPayment: number;
  percentage: number;
}

// функциия для получения данных первичных данных о кредите(без детальных)
export const getCalcutionCreditInfo = ({
  creditRate,
  currentPeriod,
  creditSum,
}: IStateReducer): IGetCalculationCreditInfo => {
  const percentage = getPercentage(creditRate);
  const monthlyPayment = getMonthlyPayment(
    creditSum,
    currentPeriod.value,
    percentage
  );
  const totalAmount = getTotalAmount(monthlyPayment, currentPeriod.value);
  const totalOverPayment = getTotalOverPayment(creditSum, totalAmount);

  return { monthlyPayment, totalAmount, totalOverPayment, percentage };
};

const getRoundNumber = (number: number) => Number(number.toFixed(2));

// подстчет последнего платяже с учетом разницы между общими выплатами и помесячными * период выплат
export const getLastMonthlyPayment = (
  monthlyPayment: number,
  totalAmount: number,
  currentPeriod: TCreditPeriodItem
) => {
  const roundMonthlyPayment = getRoundNumber(monthlyPayment);
  const roundTotalAmount = getRoundNumber(totalAmount);
  return getRoundNumber(
    monthlyPayment +
      (roundTotalAmount - roundMonthlyPayment * currentPeriod.value)
  );
};

type TDate = {
  year: number;
  month: number;
  day: number;
};

const getDate = (date: TDate) => {
  const result = { ...date };
  if (result.month + 1 > 12) {
    result.year += 1;
    result.month = 1;
  } else {
    result.month += 1;
  }

  return result;
};

type TGetAllCreditDetails = {
  sum: number;
  monthlyPayment: number;
  lastMonthlyPayment: number;
  currentPeriod: number;
  percentage: number;
};

// функция подсчета дополнительной информации об кредите
export const getAllCreditDatails = ({
  sum,
  monthlyPayment,
  lastMonthlyPayment,
  currentPeriod,
  percentage,
}: TGetAllCreditDetails) => {
  const currentDate = new Date();
  let dateObject: TDate = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };
  let balance = sum;

  const result = [];

  for (let i = 1; i <= currentPeriod; i++) {
    const isLastMonth = i === currentPeriod;

    // дата платежа
    dateObject = getDate(dateObject);

    // платёж по процентам
    const interestPayment = getRoundNumber(balance * percentage);

    // общая сумма платежа
    const currentMonthlyPayment = getRoundNumber(
      isLastMonth ? lastMonthlyPayment : monthlyPayment
    );

    // платёж по основному долгу
    const mainDebit = getRoundNumber(
      isLastMonth ? balance : monthlyPayment - interestPayment
    );

    // остаток по телу кредита после данного платежа
    const remainingDebt = getRoundNumber(balance - mainDebit);
    balance = remainingDebt;

    result.push({
      id: i,
      datePayment: `${dateObject.day}.${dateObject.month}.${dateObject.year}`,
      interestPayment,
      mainDebit,
      monthlyPayment: currentMonthlyPayment,
      remainingDebt,
    });
  }

  return result;
};
