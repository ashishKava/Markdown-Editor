import React, { useState } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import Preview from './components/Preview';
import "./App.css";

const App = () => {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');

    const handleChange = async (e) => {
        const text = e.target.value;
        setMarkdown(text);
        const response = await axios.post('http://localhost:5000/api/convert', { markdown: text });
        setHtml(response.data.html);
    };

    return (
        <div className="container">
            <Editor markdown={markdown} handleChange={handleChange} />
            <Preview html={html} />
        </div>
    );
};

export default App;
