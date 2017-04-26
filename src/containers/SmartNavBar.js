import { connect } from 'react-redux';
import { NavBar } from '../components';
import {
  openLoginDialog,
  closeLoginDialog,
  logout,
} from '../actions/actions';

function mapStateToProps(state) {
  return {
    isLoginOpen: state.appState.isLoginOpen,
    logged: state.appState.logged,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleOpen: () => {
      dispatch(openLoginDialog());
    },

    handleClose: () => {
      dispatch(closeLoginDialog());
    },

    handleLogout: () => {
      dispatch(logout());
    },
  };
};

const SmartNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default SmartNavBar;
