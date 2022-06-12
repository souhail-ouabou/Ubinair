// import React, { Component } from 'react'
// import { Editor } from "react-draft-wysiwyg";
// import {EditorState} from 'draft-js'
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// export default class TextEditor extends Component {
//     state={
//         editorState:EditorState.createEmpty()
//     }

//     onEditorStateChange=(editorState)=>{
//            this.setState({
//                editorState,
//            })
//     }

//   render() {
//       const {editorState}=this.state
//     return (
//         <Editor
//         editorState={editorState}
//         toolbarClassName="toolbarClassName"
//         wrapperClassName="wrapperClassName"
//         editorClassName="editorClassName"
//         onEditorStateChange={this.onEditorStateChange}
//       />
//     )
//   }
// }

import React, {useState} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({onChangeTE,showEditorVal}) => {

    

    

    return (
        <>
            
                <ReactQuill className="shadow-sm"
                            theme="snow"
                            style={{
                                height: 350,
                                marginTop: '1rem',
                                display: 'flex',
                                flexDirection: 'column'
                            }}

                            value={showEditorVal}

                            modules={{
                                toolbar: [
                                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }], [{size: []}],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{'align': []}],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    // ['link', "video","image", "code-block"],
                                    ['clean']
                                ],
                            }}
                            formats={[
                                'header', 'font', 'size',
                                'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
                                'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"
                            ]}
                            onChange={(val) => {
                                onChangeTE(val)
                            }}
                />
          
        </>
    );
};

export default TextEditor;
