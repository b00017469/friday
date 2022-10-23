import { instance } from './config';
import { PackDateResponseType, ParamsPacksType, UpdatePackType } from './types/apiType';

export const cardsPack = {
  cardPacksDate(params?: ParamsPacksType) {
    return instance.get<PackDateResponseType>('/cards/pack', {
      params,
    });
  },
  deletePack(packId: string) {
    return instance.delete(`/cards/pack?id=${packId}`);
  },
  putPackName(packNew: UpdatePackType) {
    return instance.put('/cards/pack', { cardsPack: packNew });
  },
};