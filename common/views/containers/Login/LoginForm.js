import React from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form';
import AlertBox from '../../components/AlertBox';
import { login } from '../../../state/actions';
import { requiredField } from '../../config/validation';

const handleSubmit = props => (data => props.login(data));

const onDataChange = context => (
  data => (context.setState(data))
);

const formFields = [
  {
    type: 'TextField',
    name: 'email',
    title: 'Email',
    default: '',
    validation: {
      callback: requiredField,
    },
  },
  {
    type: 'PasswordField',
    name: 'password',
    title: 'Password',
    default: '',
    props: {
      hiddenConfirm: true,
    },
    validation: {
      callback: requiredField,
    },
  },
];

const getError = ({ hasError, error }) => ( //eslint-disable-line
  hasError ? <AlertBox type={'bad'}>{error}</AlertBox> : ''
);

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        {getError(this.props)}
        <Form
          fields={formFields}
          onSubmit={handleSubmit(this.props)}
          onDataChange={onDataChange(this)}
          buttonText={'Login'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.users.error,
  hasError: state.users.hasError,
});

export default connect(
  mapStateToProps,
  {
    login,
  },
)(LoginForm);
