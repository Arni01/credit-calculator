export type TCreditPeriodItem = {
  name: string;
  value: number;
};

export const CreditPeriod = {
  '1': { name: '1 месяц', value: 1 },
  '3': { name: '3 месяца', value: 3 },
  '6': { name: '6 месяцев', value: 6 },
  '12': { name: '1 год', value: 12 },
  '24': { name: '2 года', value: 24 },
  '60': { name: '5 года', value: 60 },
};

export const DefaultCreditRate = 5;
