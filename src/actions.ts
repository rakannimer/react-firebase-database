import { FirebaseDatabaseProviderState } from "./types";

export type AddPathToDataArgs = {
  path: string;
  data: any;
  unsub: () => void;
};
export const actions = {
  addPathToData: (
    state: FirebaseDatabaseProviderState,
    { path, data: newData, unsub }: AddPathToDataArgs
  ) => {
    const data = Object.assign({}, state.dataTree, {
      [path]: { data: newData, unsub }
    });
    const newState = Object.assign({}, state, { dataTree: data });
    return newState;
  }
};
