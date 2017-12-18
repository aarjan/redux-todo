import {connect} from 'react-redux'
import {setVisiblityFilter} from '../actions'
import Link from '../components/Link'

// Map store values to the props for the component
const mapStateToProps = (state,ownProps) => {
    return {
        active:ownProps.filter === state.visibiltyFilter
    }
}

// Map dispatch actions to the props for the component
const mapDispatchToProps = (dispatch,ownProps) => (
    {
        onClick:() => {dispatch(setVisiblityFilter(ownProps.filter))}
    }
)

// Connect the mapStateToProps and mapDispatchToProps Methods to the counter component (without connect the counter component cannot access the store)
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink
