import {
  addCardsAC,
  initialStateCards,
  setCardsDataAC,
  setCardSortAC,
  setCardsPackIdAC,
  setCardsPackNameAC,
  setCardsPerPageAC,
  setQuestionSearchAC,
  setSelectedCardsPageAC,
  updateCarGradedAC,
} from './cardsReducer';

// initialState type
export type InitialStateCards = typeof initialStateCards;

// action
export type SetCardsDataACType = ReturnType<typeof setCardsDataAC>;
export type AddCardsACType = ReturnType<typeof addCardsAC>;
export type SetCardsPackIdACType = ReturnType<typeof setCardsPackIdAC>;
export type SetCardSortACType = ReturnType<typeof setCardSortAC>;
export type SetQuestionSearchACType = ReturnType<typeof setQuestionSearchAC>;
export type SetCardsPerPageACType = ReturnType<typeof setCardsPerPageAC>;
export type SetSelectedCardsPageACType = ReturnType<typeof setSelectedCardsPageAC>;
export type SetCardsPackNameACType = ReturnType<typeof setCardsPackNameAC>;
export type UpdateCarGradedACType = ReturnType<typeof updateCarGradedAC>;

export type StateCardsReducerActionsType =
  | SetCardsDataACType
  | AddCardsACType
  | SetCardsPackIdACType
  | SetCardSortACType
  | SetQuestionSearchACType
  | SetCardsPerPageACType
  | SetSelectedCardsPageACType
  | SetCardsPackNameACType
  | UpdateCarGradedACType;
