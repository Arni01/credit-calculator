import { CreditCalculator } from './components'
import { useGetRefinancingRate } from './hooks/useFetch/useGetRefinancingRate'

function App() {
    const { isLoading, data, isError } = useGetRefinancingRate()

    if (isLoading) {
        return (
            <main>
                <h3>Loading...</h3>
            </main>
        )
    }

    if (isError) {
        return (
            <main>
                <h3>Sorry, something went wrong...</h3>
            </main>
        )
    }

    return <CreditCalculator creditRate={data.rate as number} maxCreditSum={data.maxCreditSum}/>
}

export default App
