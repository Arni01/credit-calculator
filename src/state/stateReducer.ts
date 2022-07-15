import { CreditPeriod, TCreditPeriodItem } from 'helpers/constants/CreditData'

enum ActionKind {
    SET_RATE = 'SET_RATE',
    SET_SUM = 'SET_SUM',
    SET_PERIOD = 'SET_PERIOD',
}

export interface IStateReducer {
    currentPeriod: TCreditPeriodItem
    creditSum: number
    creditRate: number
}

export interface IAcion {
    type: keyof typeof ActionKind
    payload: number | string | TCreditPeriodItem
}

export function stateReducer(state: IStateReducer, action: IAcion) {
    const { type, payload } = action

    switch (type) {
        case ActionKind.SET_RATE:
            return { ...state, creditRate: Number(payload) }

        case ActionKind.SET_SUM:
            return { ...state, creditSum: Number(payload) }

        case ActionKind.SET_PERIOD:
            return {
                ...state,
                currentPeriod:
                    CreditPeriod[payload as keyof typeof CreditPeriod],
            }

        default:
            return state
    }
}

export const setCreditRate = (payload: number) => ({
    type: ActionKind.SET_RATE,
    payload,
})

export const setCreditSum = (payload: number) => ({
    type: ActionKind.SET_SUM,
    payload,
})

export const setCreditPeriod = (payload: string) => ({
    type: ActionKind.SET_PERIOD,
    payload,
})
