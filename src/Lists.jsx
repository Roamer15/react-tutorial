function Lists(){
    const fruits = [(name: 'apple', calories: 95)
                    (name: 'banana', calories: 105)
                    (name: 'cherry', calories: 90)
                    (name: 'date', calories: 66)
                    (name: 'elderberry', calories: 73)
                    (name: 'fig', calories: 107)];
    
    fruits.sort()

    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>)
    return (
        <ol>{listItems}</ol>
    )
}

export default Lists