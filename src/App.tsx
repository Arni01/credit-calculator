import { CreditCalculator } from './components';
import { useGetRefinancingRate } from './hooks/useFetch/useGetRefinancingRate';

function App() {
  const { isLoading, data, isError } = useGetRefinancingRate();

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h3>Sorry, something went wrong...</h3>
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
