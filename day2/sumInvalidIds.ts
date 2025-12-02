import { ID } from "./types";

export function sumInvalidIds(ids: ID[], isInvalidIdFn: (id: ID) => boolean): number {
  return ids.reduce((acc, id) => {
    return isInvalidIdFn(id)
      ? acc + parseInt(id.value)
      : acc;
  }, 0);
}
