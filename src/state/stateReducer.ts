import { TCreditPeriodItem } from '../helpers/constants/CreditData';
import { getFullRate } from '../helpers/creditData/creditData';

enum ActionKind {
  SET_RATE = 'SET_RATE',
  SET_SUM = 'SET_SUM',
}

interface IStateReducer {
  currentPeriod: TCreditPeriodItem;
  creditSum: number;
  creditRate: number;
}

export interface IAcion {
  type: keyof typeof ActionKind;
  payload: number | TCreditPeriodItem;
}

export function stateReducer(state: IStateReducer, action: IAcion) {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.SET_RATE:
      return { ...state, creditRate: getFullRate(payload as number) };

    case ActionKind.SET_SUM:
      return { ...state, creditSum: Number(payload) };

    default:
      return state;
  }
}

export const setCreditRate = (payload: number) => ({
  type: ActionKind.SET_RATE,
  payload,
});

export const setCreditSum = (payload: number) => ({
  type: ActionKind.SET_SUM,
  payload,
});
