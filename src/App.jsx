
import List from './List.jsx'

function App() {

  const fruits=  [{id: 1,name :"apple",calories: 105},
    {id: 2,name:"orange",calories: 100},
    {id: 3,name:"grape", calories: 45},
    {id: 4,name:"banana",calories: 55}];

    const vegetable=  [{id: 5,name :"carrots",calories: 35},
                    {id: 6,name:"potatoes",calories: 120},
                    {id: 7,name:"toamato", calories: 15},
                    {id: 8,name:"corn",calories: 75}];
  return (
  <>

             {fruits.length >0 && <List items={fruits} category="Fruits"/>}
            {vegetable.length > 0 && <List items={vegetable} category="Vegetables"/>}


    </>
  );

}

export default App
