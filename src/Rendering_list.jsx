function Rendering_list(){
const name=[{id:1,name:'ram',age:21},
    {id:2,name:'shyam',age:22},
    {id:3,name:'sita',age:23}];
// const newname=name.map(names=><li key={4}>{names}</li>);
// return<ol>{newname}</ol>
// return<ol>{name}</ol>


const newname=name.map(names=><li key={names.id}>{names.name} is {names.age} years old</li>);
 return<ol>{newname}</ol>

}
export default Rendering_list;