import { FC } from 'react'
// import cn from 'classnames';
import { AmountList } from 'components'
import s from './AllCreditDetailsItem.module.css'

interface IAllCreditDetailsItem {
    id: number
    datePayment: string
    interestPayment: number
    mainDebit: number
    monthlyPayment: number
    remainingDebt: number
}

const AllCreditDetailsItem: FC<IAllCreditDetailsItem> = ({
    id,
    datePayment,
    interestPayment,
    remainingDebt,
    mainDebit,
    monthlyPayment,
}) => {
    return (
        <tr className={s.item}>
            <td>
                <p>{id}</p>
            </td>
            <td>
                <p>{datePayment}</p>
            </td>

            <td>
                <AmountList amount={interestPayment} />
            </td>
            <td>
                <AmountList amount={mainDebit} />
            </td>
            <td>
                <AmountList amount={monthlyPayment} />
            </td>
            <td>
                <AmountList amount={remainingDebt} />
            </td>
        </tr>
    )
}

export default AllCreditDetailsItem
