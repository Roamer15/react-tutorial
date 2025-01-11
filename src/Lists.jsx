function Lists(){
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: 'banana', calories: 105},
                    {id: 3, name: 'cherry', calories: 90},
                    {id: 4, name: 'date', calories: 66},
                    {id: 5, name: 'elderberry', calories: 73},
                    {id: 6, name: 'fig', calories: 107}];
    
    // fruits.sort((a, b) => a.calories - b.calories) //forward order sorting for numbers
    // fruits.sort((a, b) => b.calories - a.calories) //reverse order sorting for numbers
    // fruits.sort((a, b) => a.name.localeCompare(b.name)) //forward order sorting for string
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) //reverse order sorting for string

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    //  const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

    const listItems = fruits.map(fruit => <li key={fruit.name}>
                                          {fruit.name}: &nbsp;
                                          <b>{fruit.calories}</b>
                                          </li>)
    return (
        <ol>{listItems}</ol>
    )
}

export default Lists