import { REST } from './REST';
import { API_URL_REFINANCING_RATE } from '../helpers/constants/API';

export interface IGetRate {
  Date: string;
  Value: number;
}

class RefinancingRate extends REST {
  constructor() {
    super(API_URL_REFINANCING_RATE);
  }
  async getRate(): Promise<IGetRate> {
    const data = new Date();

    const response: IGetRate[] = await this.get(
      `api/refinancingrate?ondate=${data.getFullYear()}-${
        data.getMonth() + 1
      }-${data.getDate()}`
    );

    return response[0];
  }
}

export default new RefinancingRate();
