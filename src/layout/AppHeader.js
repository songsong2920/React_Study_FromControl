import React from "react";

const link = { color: "black", textDecoration: "none" };

const AppHeader = ({ title }) => {
  return (
    <header className="App-header">
      <h1>
        <a
          style={link}
          href="https://codesandbox.io"
          lang="en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Questions{" "}
        </a>
        {title}
      </h1>
    </header>
  );
};

export default AppHeader;
