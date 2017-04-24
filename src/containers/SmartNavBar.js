import { connect } from 'react-redux';
import { NavBar } from '../components';
import { openLoginDialog, closeLoginDialog } from '../actions/actions';

function mapStateToProps(state) {
  return {
    isLoginOpen: state.appState.isLoginOpen,
    logged: state.appState.logged,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleOpen: () => {
      dispatch(openLoginDialog);
    },

    handleClose: () => {
      dispatch(closeLoginDialog);
    },
  };
};

const SmartNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default SmartNavBar;
