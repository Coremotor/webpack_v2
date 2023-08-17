import { combineReducers } from '@reduxjs/toolkit';
import * as reducers from 'modules/_shared/root-store';

export const rootReducer = combineReducers({ ...reducers });
