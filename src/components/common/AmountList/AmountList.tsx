import { CURRENCY } from 'helpers/constants/CreditData'
import { FC, memo } from 'react'
import s from './AmountList.module.css'

interface IAmountList {
    amount: number | string
    customClassName?: string
}

const AmountList: FC<IAmountList> = ({ amount, customClassName }) => {
    // разделение цифрф на целые и десятичные
    let [integer, decimal] = amount.toString().split('.')

    integer = decimal ? integer + '.' : integer
    decimal = decimal ? decimal : ''

    return (
        <p className={customClassName}>
            {integer}
            <span className={s.span}>{decimal}</span> {CURRENCY}
        </p>
    )
}

export default memo(AmountList)
