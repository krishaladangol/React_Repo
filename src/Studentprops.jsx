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

// propTypes->a mechanism to ensure that the passed value is of the correct datatype.

Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    Isstudent:PropTypes.boolean,

}
// defaultprops->when value is not passed through app.jsx(main component)
Student.defaultProps={
    name:"guest",
    age:0,
    Isstudent:false,
}
export default Student;