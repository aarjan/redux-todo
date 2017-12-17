import {connect} from 'react-redux'
import {setVisiblityFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state,ownProps) => {
    return {
        active:ownProps.filter === state.visibiltyFilter
    }
}

const mapDispatchToProps = (dispatch,ownProps) => (
    {
        onClick:() => {dispatch(setVisiblityFilter(ownProps.filter))}
    }
)

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink