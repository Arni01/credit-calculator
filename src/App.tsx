import { CreditCalculator } from './components';
import { useGetRefinancingRate } from './hooks/useFetch/useGetRefinancingRate';

function App() {
  const { isLoading, data, isError } = useGetRefinancingRate();

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Sorry, something went wrong...</h1>
      </div>
    );
  }

  return (
    <div>
      <CreditCalculator creditRate={data as number} />
    </div>
  );
}

export default App;
