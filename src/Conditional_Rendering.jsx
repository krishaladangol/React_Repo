function Rendering(props){
if(props.isloggedin){
    return <h1>{props.name} is logged in</h1>
}
return<h1>Retry Again.</h1>
}
export default Rendering;