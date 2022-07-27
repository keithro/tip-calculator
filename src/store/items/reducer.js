import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED,
  ITEM_REMOVED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    // Spread the rest of the items incase we add or override something
    const item = { uuid: id++, quantity: 1, ...action.payload };
    // Returning an array with all other items + the new item we created
    return [...state, item];
  }
  if (action.type === ITEM_REMOVED) {
    // Filter is immutable so we can use it directly on the state
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }
  if (action.type === ITEM_PRICE_UPDATED) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, price: action.payload.price };
      }
      return item;
    });
  }
  if (action.type === ITEM_QUANTITY_UPDATED) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, quantity: action.payload.quantity };
      }
      return item;
    });
  }

  return state;
};

export default reducer;
