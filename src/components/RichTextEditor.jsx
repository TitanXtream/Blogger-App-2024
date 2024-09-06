'use client';

import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = function (state) {
    setEditorState(state);
  };

  const uploadImageCallback = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const formData = new FormData();
        formData.append('image', file);

        // Replace the URL below with your own image upload endpoint
        fetch('https://example.com/upload', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            // Assuming the response contains the uploaded image URL
            const imageUrl = response.url;
            resolve({ data: { link: imageUrl } });
          })
          .catch((error) => {
            reject(error);
          });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleGetHTML = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const markup = draftToHtml(rawContentState);
    console.log(markup);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        toolbar={{
          image: {
            uploadCallback: uploadImageCallback,
          },
          inline: {
            inDropdown: false,
          },
          list: {
            inDropdown: false,
          },
          textAlign: {
            inDropdown: false,
          },
          link: {
            inDropdown: false,
          },
          history: {
            inDropdown: false,
          },
        }}
      />
      <button onClick={handleGetHTML}>Get HTML</button>
    </div>
  );
};

export default RichTextEditor;
