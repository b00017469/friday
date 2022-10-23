import React from 'react';

import { useAppDispatch } from '../../../app/store/store';
import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import {
  packDeleteTC,
  packNewNameTC,
} from '../../../features/table/packTable/reducer/packTableReducer';
import { ReturnComponentType } from '../../../types';

import s from './style/ActionsSvg.module.scss';
import { ActionsSvgType } from './style/ActionsSvgType';

export const ActionsSvg = ({ isMyPack, packId }: ActionsSvgType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const onEditClick = (): void => {
    dispatch(packNewNameTC(packId));
  };

  const onDeleteClick = (): void => {
    dispatch(packDeleteTC(packId));
  };

  return (
    <div>
      <button type="button" className={s.button}>
        <img src={teacherSvg} alt="teacherSvg" />
      </button>

      {isMyPack && (
        <>
          <button type="button" onClick={onEditClick} className={s.button}>
            <img src={editSvg} alt="editSvg" />
          </button>
          <button type="button" onClick={onDeleteClick} className={s.button}>
            <img src={deleteSvg} alt="deleteSvg" />
          </button>
        </>
      )}
    </div>
  );
};
