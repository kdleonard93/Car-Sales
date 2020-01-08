const ADD_FEATURE = "ADD_FEATURE";
const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addfeature(item) {
  return {
    item: ADD_FEATURE,
    payload: item
  };
}

export function removefeature(item) {
  return {
    item: REMOVE_FEATURE,
    payload: item
  };
}
