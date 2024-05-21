import React from 'react';
import Modal from 'react-modal';
import DaumPostcodeEmbed from 'react-daum-postcode';
import styled from 'styled-components';

interface PostcodeModalProps {
    isOpen: boolean;
    onComplete: (data: any) => void;
    onRequestClose: () => void;
}


const PostcodeModal: React.FC<PostcodeModalProps> = ({
    isOpen,
    onComplete,
    onRequestClose,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="우편번호 찾기"
            ariaHideApp={false}
            style={{
                content: {
                    top: '60%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    width: '40%',
                    height: '65%',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    overflow: 'hidden'
                },
            }}
        >
            <CloseButton type="button" onClick={onRequestClose}><span className="material-symbols-outlined">
                close
            </span></CloseButton>
            <DaumPostcodeEmbed onComplete={onComplete} />

        </Modal>
    );
};

export default PostcodeModal;

const CloseButton = styled.button`
    float: right;
    border: none;
    font-size: 20px;
    margin-bottom: 20px;
    background: no-repeat;
    cursor:pointer;
}
`;

