import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="studentdetails">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Isstudent:{props.Isstudent?"yes":"no"}</p>
        </div>
    );
}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    Isstudent:PropTypes.boolean,

}
// defaultprops
Student.defaultProps={
    name:"guest",
    age:0,
    Isstudent:false,
}
export default Student;