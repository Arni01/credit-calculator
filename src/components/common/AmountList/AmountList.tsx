import { CURRENCY } from 'helpers/constants/CreditData'
import { FC, memo } from 'react'
import s from './AmountList.module.css'

interface IAmountList {
    amount: number | string
    customClassName?: string
}

const AmountList: FC<IAmountList> = ({ amount, customClassName }) => {
    // разделение цифрф на целые и десятичные
    const arrayAmount = amount.toString().split('.')
    const integer = arrayAmount[0]
    let decimal = arrayAmount[1]
    console.log({decimal});


    if (integer !== '0' && decimal?.length !== 2) {

        decimal = decimal ? decimal + '0' : '00'
    }

    return (
        <p className={customClassName}>
            {amount ? (
                <>
                    {integer}.<span className={s.span}>{decimal}</span>
                </>
            ) : (
                amount
            )}{' '}
            {CURRENCY}
        </p>
    )
}

export default memo(AmountList)
