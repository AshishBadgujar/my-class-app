import React, { useState } from 'react';
import UploadImg from './UploadImg';

function FileUploadModal({
    closeModal,
    onSave,
    title
}) {

    return (
        <>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-10 overflow-auto w-full ">
                <div className="bg-white rounded-lg p-4 shadow-md mt-8" >
                    <UploadImg title={title} onSave={onSave} closeModal={closeModal} />
                </div>
            </div>
        </>
    );
}

export default FileUploadModal;
