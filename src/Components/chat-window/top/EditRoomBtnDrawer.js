import React from 'react';
import { useParams } from 'react-router';
import { Alert, Button, Drawer } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useMediaQuery, useModalState } from '../../../misc/custom-hooks';
import { database } from '../../../misc/firebase';
import EditibleInput from '../../EditibleInput';

const EditRoomBtnDrawer = () => {
  const { isOpen, open, close } = useModalState();
  const { chatId } = useParams();

  const name = useCurrentRoom(v => v.name);
  const description = useCurrentRoom(v => v.description);
  const isMobile = useMediaQuery('(max-width: 992px)');

  const updateData = (key, Value) => {
    database
      .ref(`rooms/${chatId}`)
      .child(key)
      .set(Value)
      .then(() => {
        Alert.success('Successfully updated', 4000);
      })
      .catch(err => {
        Alert.error(err.message, 4000);
      });
  };

  const onNameSave = newName => {
    updateData('name', newName);
  };
  const onDescriptionSave = newDesc => {
    updateData('description', newDesc);
  };

  return (
    <div>
      <Button className="br-circle" size="sm" color="red" onClick={open}>
        tl
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="right">
        <Drawer.Header>
          <Drawer.Title>Edit room</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <EditibleInput
            initialValue={name}
            onSave={onNameSave}
            label={<h6 className="mb-2">Name</h6>}
            emptyMsg="Name cannot be empty"
          />
          <EditibleInput
            componentClass="textarea"
            initialValue={description}
            rows={5}
            onSave={onDescriptionSave}
            emptyMsg="Description cannot be Empty"
            WrapperClassName="mt-3"
          />
        </Drawer.Body>
        <Drawer.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};

export default EditRoomBtnDrawer;
