import React, { useState } from 'react';
import { Modal, Button, Alert } from 'rsuite';
import AvatarEditor from 'react-avatar-editor';
import { useModalState } from '../../misc/custom-hooks';

export const AvatarUploadBtn = () => {
  const fileAccept = '.png, .jpeg, .jpg';
  const { isOpen, open, close } = useModalState();
  const acceptedFileType = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/pjpeg',
  ];
  const [img, setImg] = useState(null);
  const isValid = files => acceptedFileType.includes(files.type);
  const onFileChange = ev => {
    const curFile = ev.target.files;
    if (curFile.length === 1) {
      const file = curFile[0];
      if (isValid(file)) {
        setImg(file);
        open();
      } else {
        Alert.warning(
          `Not Valid => ${file.type}: Please Make Sure you Upload an image.`
        );
      }
    }
  };
  return (
    <div className="mt-3 text-center">
      <div>
        <label htmlFor="avatar-upload" className="d-block cursor-pointer">
          Select new Avatar
          <input
            id="avatar-upload"
            type="file"
            className="d-none"
            accept={fileAccept}
            onChange={onFileChange}
          />
        </label>
        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Adjust and Upload new Avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {img && (
              <AvatarEditor
                image={img}
                width={200}
                height={200}
                border={10}
                borderRadius={100}
                rotate={0}
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button block appearance="ghost">
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default AvatarUploadBtn;
