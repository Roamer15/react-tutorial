import Lists from './Lists.jsx'

function App () {

  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: 'banana', calories: 105},
                  {id: 3, name: 'cherry', calories: 90},
                  {id: 4, name: 'date', calories: 66},
                  {id: 5, name: 'elderberry', calories: 73},
                  {id: 6, name: 'fig', calories: 107}];

  const vegetables = [{id: 7, name: "potatoes", calories: 110},
                  {id: 8, name: 'celery', calories: 15},
                  {id: 9, name: 'brocolli', calories: 50},
                  {id: 10, name: 'carrot', calories: 45},
                  {id: 11, name: 'eggplant', calories: 80},
                  {id: 12, name: 'huckleberry', calories: 73}];  

  return (
    <>
      <Lists items={fruits} category='Fruits'/>
      <Lists items={vegetables} category='Vegetables'/>
    </>

  )
}

export default App
