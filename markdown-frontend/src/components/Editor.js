import React from 'react';

const Editor = ({ markdown, handleChange }) => {
    return (
        <textarea 
            className="editor" 
            value={markdown} 
            onChange={handleChange} 
            placeholder="Type Markdown here...">
        </textarea>
    );
};

export default Editor;
