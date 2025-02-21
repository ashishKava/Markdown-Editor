import React from "react";

const Preview = ({ html }) => {
  const renderContent = () => {
    const regex = /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;
    return html.replace(regex, (match, lang, code) => {
      return `<div class="code-block">${code}</div>`;
    });
  };

  return (
    <div className="preview-container">
      <div className="preview-header">Live Preview</div>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: renderContent() }}
      ></div>
    </div>
  );
};

export default Preview;
