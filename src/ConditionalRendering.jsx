function Employee(props){
    if(props.isloggedin){
        return(
            <h1>Hello {props.username} .Welcome to the React</h1>
        );
    }
    else{
        return <h1>Please login to access the React Page.</h1>
    }
}
export default Employee;