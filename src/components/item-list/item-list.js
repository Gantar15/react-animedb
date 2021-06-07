import ItemDetails from '../item-details';
import './item-list.css';
import PropTypes from 'prop-types';


function ItemList(props) {
  function renderItems(arr){
    return arr.map(item => {
      const {id} = item;
      let label;
      if(typeof props.children === 'function')
        label = props.children(item);
      else
        console.log(props)
      
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  const {data} = props;
  const items = renderItems(data);

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemDetails.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;