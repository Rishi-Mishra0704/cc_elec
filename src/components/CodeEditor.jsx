import React, { useState, useEffect } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-dart";

// Import Ace Editor themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";

// Array of supported languages
const supportedLanguages = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "golang", label: "Go" },
  { value: "ruby", label: "Ruby" },
  { value: "c_cpp", label: "C/C++" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "typescript", label: "TypeScript" },
  { value: "swift", label: "Swift" },
  { value: "markdown", label: "Markdown" },
  { value: "json", label: "JSON" },
  { value: "xml", label: "XML" },
  { value: "sql", label: "SQL" },
  { value: "yaml", label: "YAML" },
  { value: "kotlin", label: "Kotlin" },
  { value: "dart", label: "Dart" },
];
const supportedThemes = [
    { value: 'monokai', label: 'Monokai' },
    { value: 'github', label: 'GitHub' },
    { value: 'dracula', label: 'Dracula' },
  ];
const CodeEditor = () => {
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('monokai');
  
    const selectedLanguageLabel = supportedLanguages.find(lang => lang.value === language)?.label || 'Select Language';
    const selectedThemeLabel = supportedThemes.find(t => t.value === theme)?.label || 'Select Theme';
  
    return (
      <Container fluid>
        <Row className="mt-3">
          <Col>
            <Row>
              <Col>
                {/* Language selection dropdown */}
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="language-dropdown">
                    {selectedLanguageLabel}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {supportedLanguages.map(lang => (
                      <Dropdown.Item
                        key={lang.value}
                        onClick={() => setLanguage(lang.value)}
                      >
                        {lang.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                {/* Theme selection dropdown */}
                <Dropdown className="ml-3">
                  <Dropdown.Toggle variant="primary" id="theme-dropdown">
                    {selectedThemeLabel}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {supportedThemes.map(theme => (
                      <Dropdown.Item
                        key={theme.value}
                        onClick={() => setTheme(theme.value)}
                      >
                        {theme.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
  
        <Row className="mt-3">
          <Col>
            {/* Ace Editor component */}
            <AceEditor
            mode={language}
            theme={theme}
            name="code-editor"
            editorProps={{ $blockScrolling: true, fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace' }}
            width="100%"
            showGutter={true}
            fontSize={16}
          />
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default CodeEditor;