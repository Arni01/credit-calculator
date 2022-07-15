import cn from 'classnames'
import { AmountList } from 'components'
import { FC, memo } from 'react'
import s from './CreditDescription.module.css'

interface ICreditDescription {
    isMiddle?: boolean
    title: string
    description: number
}

const CreditDescription: FC<ICreditDescription> = ({
    isMiddle = false,
    title,
    description,
}) => {
    return (
        <div className={cn(s.container, isMiddle && s.mainDescription)}>
            <p className={s.title}>{title}</p>
            <AmountList
                amount={description.toFixed(2)}
                customClassName={s.description}
            />
        </div>
    )
}

export default memo(CreditDescription)
