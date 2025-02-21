import React, { useState } from "react";
import axios from "axios";
import { marked } from "marked";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.css";

const App = () => {
    const [markdown, setMarkdown] = useState("");
    const [html, setHtml] = useState("");

    const handleChange = async (e) => {
        const text = e.target.value;
        setMarkdown(text);

        try {
            const response = await axios.post("http://localhost:5000/api/convert", { markdown: text });
            setHtml(response.data.html);
        } catch (error) {
            console.error("Backend API failed, using local conversion:", error);
            setHtml(marked(text, { breaks: true }));
        }
    };

    return (
        <div className="container">
            <Editor markdown={markdown} handleChange={handleChange} />
            <Preview html={html} />
        </div>
    );
};

export default App;
