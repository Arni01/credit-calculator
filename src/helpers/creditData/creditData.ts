import { DefaultCreditRate } from '../constants/CreditData';

export const getFullRate = (refinancingRate: number) =>
  refinancingRate + DefaultCreditRate;
