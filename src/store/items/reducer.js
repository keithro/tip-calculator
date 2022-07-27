import { ITEM_ADDED } from './actions';

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

  return state;
};

export default reducer;
