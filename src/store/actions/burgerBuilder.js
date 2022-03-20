const actionTypes = {
  ADD_INGREDIENT: "ADD_INGREDIENT",
  REMOVE_INGREDIENT: "REMOVE_INGREDIENT",
};
export { actionTypes };

export const addIingredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
export const rermoveIingredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
