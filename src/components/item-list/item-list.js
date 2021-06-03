import './item-list.css';


function ItemList(props) {
  function renderItems(arr){
    return arr.map(item => {
      const {id} = item;
      let label;
      if(typeof props.children === 'function')
        label = props.children(item);
      else
        label = props.renderItem(item);
      
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

export default ItemList;