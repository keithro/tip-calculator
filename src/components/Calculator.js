import { Card } from '@twilio-paste/core';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

// import { MenuItems } from './MenuItems';
import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';

// Now that we are using the MenuItemsContainer, we no longer need hard coded array.
// const items = [
//   { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
//   { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
// ];

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      {/* <MenuItems items={items} /> */}
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
