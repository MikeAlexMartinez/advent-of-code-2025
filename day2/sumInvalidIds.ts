import { isInvalidId } from "./isInvalidId";
import { ID } from "./types";

export function sumInvalidIds(ids: ID[]): number {
  return ids.reduce((acc, id) => {
    return isInvalidId(id)
      ? acc + parseInt(id.value)
      : acc;
  }, 0);
}
