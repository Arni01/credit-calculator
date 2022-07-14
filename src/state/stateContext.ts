import { Dispatch } from 'react';
import { createContext } from 'react';
import { IAcion } from './stateReducer';

export const StateContext = createContext<Dispatch<IAcion> | null>(null);
