import React from 'react';

const Editor = ({ markdown, handleChange }) => {
    return (
        <div className="editor-container">
            <div className="editor-header">Markdown Editor</div>
            <textarea 
                className="editor" 
                value={markdown} 
                onChange={handleChange} 
                placeholder="Type Markdown here..."
            ></textarea>
        </div>
    );
};

export default Editor;
