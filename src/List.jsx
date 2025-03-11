import PropTypes from 'prop-types';
function List(props) {
    // Ensure props have default values if not provided
    const category = props.category || "Uncategorized";
    const items = props.items || [];
       /* const fruits=  [{id: 1,name :"apple",calories: 105},
                   {id: 2,name:"orange",calories: 100}
                   ,{id: 3,name:"grape", calories: 45},
                   {id: 4,name:"banana",calories: 55}];

    //fruits.sort((a,b) => a.name.localeCompare(b.name));//Alphabetical
    //fruits.sort((a,b) => b.name.localeCompare(a.name));//Reverse Alphabetical
        //fruits.sort((a,b) => a.calories-b.calories);//Numeric
        //fruits.sort((a,b) => b.calories-a.calories);// Reverse Numeric

    //const lowCalFruits=fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits=fruits.filter(fruit => fruit.calories >= 100);
*/
//const category=props.category;

//const itemList=props.items;
const listItems=items.map(item => <li key={item.id}>
                               {item.name}: &nbsp;
                               {item.calories}</li>);

    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}
List.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id:  PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number

    }
    )),
}


export default List