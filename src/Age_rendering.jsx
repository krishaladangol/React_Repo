import PropTypes from 'prop-types'

function Age(props){
    if(props.number<18){
        return <h1 className="Restricted">Age {props.number} Restricted into React</h1>
    }
    return <h1 className="allowed">Age {props.number} Allowed for React Usage</h1>
}

Age.propTypes={
    number:PropTypes.number,
}

Age.defaultProps={
    number:2,
}
export default Age;