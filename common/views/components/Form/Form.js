import React from 'react';
import { makePairObject } from '../../utils';
import * as FieldTypes from './Fields';
import { Button } from '../Buttons';
import { form } from './form.css';
import * as grid from '../../styles/grid.css';

const getClassName = ({ layout }) => ((layout) ? layout.map(name => grid[name]).join(' ') : '');

const getFields = (fields, state, handleFieldChange) => {
  const { values, validation } = state;
  return fields.map((field, index) => {
    const { title, required, name, type } = field;
    const Component = FieldTypes[type];
    return (<Component
      title={title}
      required={required}
      extraClasses={getClassName(field)}
      name={name}
      value={values[name]}
      isValid={validation[name]}
      onValueChange={handleFieldChange}
      key={index}
    />);
  });
};

const getValidationRules = fields => (makePairObject(fields, 'name', 'validation'));

const validateField = ({ name, value }, rules) => (
  (rules[name]) ? rules[name].callback(value) : true
);

const validateForm = (data, rules) => {
  const names = Object.keys(data);
  const invalidFields = {};
  let field;
  names.forEach((name) => {
    field = {
      name,
      value: data[name],
    };
    if (!validateField(field, rules)) {
      invalidFields[name] = false;
    }
  });
  return invalidFields;
};

const getActions = text => (
  <Button
    onClick={() => ({})}
    customStyle={{ float: 'right' }}
    className={'formSubmitButton'}
  >
    { text }
  </Button>
);

const getInitialState = (fields, props) => {
  const state = {
    validation: {},
    values: {},
  };
  fields.forEach((field) => {
    state.validation[field.name] = null;
    state.values[field.name] = (props.formData[field.name]) || field.default;
  });
  return state;
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { fields } = props;
    this.state = getInitialState(fields, props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFieldChange(event) {
    const { validation, values } = this.state;
    const { fields } = this.props;
    const { name, value } = event.target;
    this.setState({
      validation: {
        ...validation,
        [name]: validateField({ name, value }, getValidationRules(fields)),
      },
      values: {
        ...values,
        [name]: value,
      },
    });
  }

  handleFormSubmit(event) {
    const {
      state: {
        validation,
        values,
      },
      props: {
        fields,
        onSubmit,
      },
    } = this;
    event.preventDefault();

    const invalidFields = validateForm(values, getValidationRules(fields));
    if (Object.keys(invalidFields).length) {
      this.setState({
        validation: {
          ...validation,
          ...invalidFields,
        },
      });
      return;
    }
    onSubmit(values);
  }

  render() {
    const {
      fields,
      buttonText,
    } = this.props;
    return (
      <form
        className={form}
        onSubmit={this.handleFormSubmit}
      >
        {getFields(
          fields,
          this.state,
          this.handleFieldChange,
        )}
        {getActions(buttonText)}
      </form>
    );
  }
}

Form.propTypes = {
  fields: React.PropTypes.arrayOf(React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    fieldClass: React.PropTypes.string,
  })).isRequired,
  initialData: React.PropTypes.object, // eslint-disable-line
  buttonText: React.PropTypes.string,
  onSubmit: React.PropTypes.func.isRequired,
};

Form.defaultProps = {
  formData: {},
};

export default Form;
