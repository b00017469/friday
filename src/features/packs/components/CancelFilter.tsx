import React from 'react';

import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Box from '@mui/material/Box';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import {
  DEFAULT_MAX_COUNT,
  setMinMaxCountAC,
  setPackNameAC,
  setUserIdAC,
} from '../reducer/packsReducer';

import s from './styles/AbortSort.module.scss';

export const CancelFilter = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const abortSortSettings = (): void => {
    dispatch(setPackNameAC(''));
    dispatch(setUserIdAC(''));
    dispatch(setMinMaxCountAC([0, DEFAULT_MAX_COUNT]));
  };

  return (
    <Box className={s.abortSort} onClick={abortSortSettings}>
      <FilterAltOffIcon />
    </Box>
  );
};