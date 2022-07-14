import { useEffect, useMemo, useState } from 'react';
import { getFullRate } from '../../helpers/creditMetods/creditMetods';
import RefinancingRateService from '../../services/RefinancingRate.service';

export const useGetRefinancingRate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    RefinancingRateService.getRate()
      .then((rate) => setData(getFullRate(rate.Value)))
      .catch((error) => setIsError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return useMemo(
    () => ({ isLoading, data, isError }),
    [isLoading, data, isError]
  );
};
