function CalorieCheck(){
 const fruit=[{id:1,name:'apple',calorie:30},
 {id:2,name:'banana',calorie:60},
 {id:3,name:'grapes',calorie:20}
 ];
 const below20=fruit.filter(fruits=>fruits.calorie<20).map(fruits=><li key={fruits.id}>{fruits.name}:{fruits.calorie}</li>)
 
const above20=fruit.filter(fruits=>fruits.calorie>20).map(fruits=><li key={fruits.id}>{fruits.name}:{fruits.calorie}</li>)

if(below20==""){

}

return(<>

 <h1>Fruits below 20 calories: </h1>
{below20.length==0?<h2>there is no fruit below 20 calorie</h2>:  <ol>{below20}</ol>}

 <h1>Fruits above 20 calories: <ol>{above20}</ol></h1>
</>
 );
}
export default CalorieCheck;

// Note::
// //to put an if statement directly inside JSX, which won’t work. In JSX, you can’t write plain JavaScript if blocks; you have to use conditional expressions or ternary operators.

      
