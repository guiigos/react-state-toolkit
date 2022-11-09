import { connect } from 'react-redux';

import ClassComponent from '../';
import { increase, decrease } from '../../../context/slice';

const mapStateToProps = state => ({ value: state.counter.value });

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassComponent);

