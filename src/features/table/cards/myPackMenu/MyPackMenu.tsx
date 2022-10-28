import React from 'react';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from '../../../../app/store/store';
import deleteSvg from '../../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../../assets/svg/actions/teacher.svg';
import { ReturnComponentType } from '../../../../common/types';
import { packDeleteTC, packNewNameTC } from '../../packs/reducer/packTableReducer';

type Props = {
  hideMenu: () => void;
};

export const MyPackMenu = ({ hideMenu }: Props): ReturnComponentType => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const packId = useAppSelector(state => state.card.cardsPackId);

  const onDeleteClick = (): void => {
    dispatch(packDeleteTC(packId));
    // navigate(PATH.PACKS_LIST);
  };

  const onEditClick = (): void => {
    dispatch(packNewNameTC(packId));
    hideMenu();
  };

  const onTrainingClick = (): void => {};

  return (
    <Paper elevation={24}>
      <ClickAwayListener onClickAway={hideMenu}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onEditClick}>
              <img src={editSvg} alt="editSvg" style={{ paddingRight: '15px' }} />
              <ListItemText primary="Edit" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={onDeleteClick}>
              <img src={deleteSvg} alt="deleteSvg" style={{ paddingRight: '15px' }} />
              <ListItemText primary="Delete" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={onTrainingClick}>
              <img src={teacherSvg} alt="teacherSvg" style={{ paddingRight: '15px' }} />
              <ListItemText primary="Learn" />
            </ListItemButton>
          </ListItem>
        </List>
      </ClickAwayListener>
    </Paper>
  );
};
