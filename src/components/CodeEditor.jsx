
import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-kotlin';
import 'ace-builds/src-noconflict/mode-dart';


// Import Ace Editor themes
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-dracula';

// Array of supported languages
const supportedLanguages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'golang', label: 'Go' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'c_cpp', label: 'C/C++' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'swift', label: 'Swift' },
  { value: 'markdown', label: 'Markdown' },
  { value: 'json', label: 'JSON' },
  { value: 'xml', label: 'XML' },
  { value: 'sql', label: 'SQL' },
  { value: 'yaml', label: 'YAML' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'dart', label: 'Dart' },
];

function CodeEditor() {

  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('monokai');
  return (
    <div>
      {/* Language selection dropdown */}
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        {/* Options for languages */}
        {supportedLanguages.map(lang => (
          <option key={lang.value} value={lang.value}>{lang.label}</option>
        ))}
      </select>

      {/* Theme selection dropdown */}
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {/* Options for themes */}
        <option value="monokai">Monokai</option>
        <option value="github">GitHub</option>
        <option value="dracula">Dracula</option>
        {/* Add more themes as needed */}
      </select>
      {/* Ace Editor component */}
      <AceEditor
        mode={language}
        theme={theme}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default CodeEditor;