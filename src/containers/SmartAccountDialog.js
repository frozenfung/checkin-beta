import { connect } from 'react-redux';
import { login, updateLoginForm, updateAccountDialogActiveTab } from '../actions/actions';
import AccountDialog from '../components/navbar/AccountDialog';

function mapStateToProps(state) {
  return {
    userInfo: state.appState.userInfo,
    logged: state.appState.logged,
    username: state.login.username,
    password: state.login.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateLoginForm: (e, value) => {
      dispatch(updateLoginForm({
        [e.target.name]: value,
      }));
    },

    updateActiveTab: (tab) => {
      dispatch(updateAccountDialogActiveTab(tab.props.label));
    },

    handleSubmit: (e) => {
      dispatch(login());
    }
  };
}

const SmartAccountDialog = connect(mapStateToProps, mapDispatchToProps)(AccountDialog);

export default SmartAccountDialog;

