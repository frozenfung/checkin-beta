import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    logged: state.appState.logged,
  };
};

function mapDispatchToProps() {
  return {};
};

const SmartApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default SmartApp;
