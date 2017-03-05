import {
  connect,
} from 'react-redux';
import Modal from '../components/Modal';
import {
  closeModal,
} from '../../state/actions/modal';

const mapStateToProps = state => (
  {
    title: state.modal.title,
    content: state.modal.content,
    isOpen: state.modal.isOpen,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onCloseClick: () => dispatch(closeModal()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
