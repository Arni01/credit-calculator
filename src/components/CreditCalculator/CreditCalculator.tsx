import { AllCreditDetails, CalculationCreditInfo, DataEntry } from 'components'
import {
    getCalcutionCreditInfo,
    getLastMonthlyPayment,
} from 'helpers/creditMetods/creditMetods'
import { FC, useCallback, useMemo, useReducer, useState } from 'react'
import { CreditPeriod } from '../../helpers/constants/CreditData'
import { StateContext, stateReducer } from '../../state'
import s from './CreditCalculator.module.css'

interface ICreditCalculator {
    creditRate: number
}

const CreditCalculator: FC<ICreditCalculator> = ({ creditRate }) => {
    const [isOpenDetails, setIsOpenDetails] = useState(false)

    const [state, dispatch] = useReducer(stateReducer, {
        currentPeriod: CreditPeriod[12],
        creditSum: 10_000,
        creditRate,
    })

    const handleTogleDetails = useCallback(() => {
        isOpenDetails ? setIsOpenDetails(false) : setIsOpenDetails(true)
    }, [isOpenDetails])

    const { percentage, ...calculationCreditInfo } = useMemo(
        () => getCalcutionCreditInfo(state),
        [state]
    )

    const lastMonthlyPayment = getLastMonthlyPayment(
        calculationCreditInfo.monthlyPayment,
        calculationCreditInfo.totalAmount,
        state.currentPeriod
    )

    return (
        <StateContext.Provider value={dispatch}>
            <main className={s.container}>
                <DataEntry {...state} />
                <CalculationCreditInfo
                    {...calculationCreditInfo}
                    isOpenDetails={isOpenDetails}
                    toogleDetails={handleTogleDetails}
                />
                {/* если развер кредита равен 0 и флаг не включен, дополнительная информация не показывается*/}
                {isOpenDetails && state.creditSum ? (
                    <AllCreditDetails
                        creditSum={state.creditSum}
                        currentPeriod={state.currentPeriod}
                        monthlyPayment={calculationCreditInfo.monthlyPayment}
                        lastMonthlyPayment={lastMonthlyPayment}
                        percentage={percentage}
                    />
                ) : null}
            </main>
        </StateContext.Provider>
    )
}

export default CreditCalculator
