import { useState } from 'react';

import PropTypes from 'prop-types';

import {
  ItemWrapper,
  ContactWrapper,
  ItemName,
  ItemPhone,
  ItemModifyBtn,
  BtnWrapper,
} from './ContactListItem.styled.js';

import Modal from 'components/Modal/Modal.jsx';
import ChangeForm from 'components/ChangeForm/index.js';
import DeleteForm from 'components/DeleteForm/index.js';
import Avatar from 'components/Avatar/Avatar.jsx';

const ContactListItem = ({ id, name, number }) => {
  const [isOpenedEditModal, SetIsOpenedEditModal] = useState(false);
  const [isOpenedDeleteModal, SetIsOpenedDeleteModal] = useState(false);

  const handleEditModalToggle = () => SetIsOpenedEditModal(!isOpenedEditModal);
  const handleDeleteModalToggle = () =>
    SetIsOpenedDeleteModal(!isOpenedDeleteModal);

  return (
    <>
      <ContactWrapper>
        <Avatar str={name} />
        <ItemWrapper>
          <ItemName>{name}</ItemName>
          <ItemPhone>{number}</ItemPhone>
        </ItemWrapper>
        <BtnWrapper>
          <ItemModifyBtn type="button" onClick={handleEditModalToggle}>
            Edit
          </ItemModifyBtn>
          <ItemModifyBtn type="button" onClick={handleDeleteModalToggle}>
            Delete
          </ItemModifyBtn>
        </BtnWrapper>
      </ContactWrapper>
      {isOpenedEditModal && (
        <Modal onClose={handleEditModalToggle}>
          <ChangeForm
            id={id}
            name={name}
            number={number}
            onClose={handleEditModalToggle}
          />
        </Modal>
      )}
      {isOpenedDeleteModal && (
        <Modal onClose={handleDeleteModalToggle}>
          <DeleteForm
            id={id}
            name={name}
            number={number}
            onClose={handleDeleteModalToggle}
          />
        </Modal>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
