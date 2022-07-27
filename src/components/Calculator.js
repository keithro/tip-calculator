import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

// import { MenuItems } from './MenuItems';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
// import { NewItemForm } from './NewItemForm';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
// import { Summary } from './Summary';
import { SummaryContainer } from '../containers/SummaryContainer';

// Now that we are using the MenuItemsContainer, we no longer need hard coded array.
// const items = [
//   { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
//   { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
// ];

const Calculator = () => {
  return (
    <Card>
      {/* <NewItemForm /> */}
      <NewItemFormContainer />
      {/* <MenuItems items={items} /> */}
      <MenuItemsContainer />
      <TipSelectContainer />
      {/* <Summary /> */}
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
