import React, { useCallback, useEffect } from 'react';

import { PaginationPage } from '../../common/components/pagination/PaginationPage';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';

import { AddNewPack } from './packTable/AddNewPack';
import { PackTable } from './packTable/PackTable';
import { SortBar } from './packTable/sortBar/SortBar';
import {
  addPackTC,
  packDateTC,
  setPacksPerPageAC,
  setSelectedPageAC,
} from './reducer/packTableReducer';
import s from './style/Packs.module.scss';

export const Packs = (): ReturnComponentType => {
  const page = useAppSelector(state => state.pack.page);
  const pageCount = useAppSelector(state => state.pack.pageCount);
  const packName = useAppSelector(state => state.pack.packName);
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const userId = useAppSelector(state => state.pack.user_id);
  const minMaxCount = useAppSelector(state => state.pack.minMaxCount);

  const dispatch = useAppDispatch();

  const changePacksPerPage = useCallback(
    (count: number): void => {
      dispatch(setPacksPerPageAC(count));
    },
    [dispatch],
  );

  const setSelectedPage = useCallback(
    (page: number): void => {
      dispatch(setSelectedPageAC(page));
    },
    [dispatch],
  );

  const onAddPackClick = useCallback(
    (titlePack: string, privatePack: boolean): void => {
      dispatch(addPackTC(titlePack, privatePack));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(packDateTC());
  }, [dispatch, pageCount, page, sortPacks, userId, minMaxCount, packName]);

  return (
    <div className={s.container}>
      <div className={s.titleButton}>
        <AddNewPack onAddPackClick={onAddPackClick} />
      </div>

      <SortBar />

      <div className={s.packTable}>
        <PackTable />
      </div>

      <div className={s.pagination}>
        <PaginationPage
          itemsPerPage={pageCount}
          selectPage={setSelectedPage}
          changeCountItemsPerPage={changePacksPerPage}
        />
      </div>
    </div>
  );
};