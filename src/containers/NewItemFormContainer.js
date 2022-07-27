import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

// So here it will pass dispatch as a prop to the obj(?)

// 1. NewItemForContainer is expecting a prop called "onsubmit" and will call onsubmit function when the form is submitted.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (name, price) => dispatch(addNewItem(name, price))
//   };
// };

// 2. Using bindActionCreators
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };

// 3. mapDispatchToProps will actually map dispatch in for you so you don't need to add unless you are going to manipulate it in some way.
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

// If you don't give connect any arguments/mapDispatchToProps (did he mean to say "mapStateToProps") it will automatically pass in full dispatch obj.
// So here we are using null but it will use mapStateToProps

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
