function List(){
const fruits=
    [{id:1 ,name:'banana',calorie:20} ,{id:2,name:'apple',calorie:10},{id:3,name:'orange',calorie:40},{id:4,name:'grapes',calorie:30},{id:5,name:'pineapple',calorie:50}];
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetically sorting
// output::
        //apple
        // banana
        // grapes
        // orange
        // pineapple
    // fruits.sort((a,b)=>b.name.localeCompare(a.name));//Reverse-alphabetically sorting
fruits.sort((a, b) => a.calorie - b.calorie);//Numeric sorting

    const fruitsname=fruits.map(fruit=><li key={fruit.id}>{fruit.name}:{fruit.calorie}</li>)//object lai display garna use attribute such as fruit.name
    return <ol>{fruitsname}</ol>
}
export default List;