import { useState } from 'react';
import Dropdown from './Dropdown.jsx';
import Button from './Button.jsx';
import '../styles/Main.css';

function Main() {
  return (
    <main>
      <div className="content-container">
        <div className="options">
          <div className="content-options">
            <Dropdown text="Contact" arrowStart="down" />
            <Dropdown text="Education" arrowStart="down" />
            <Dropdown text="Experience" arrowStart="down" />
          </div>
          <div className="document-options">
            <Dropdown text="Formatting" arrowStart="up" />
            <div className="document-btns">
              <Button text="RESET" className="reset" />
              <Button text="PRINT" className="print" />
            </div>
          </div>
        </div>
        <div className="cv-preview"></div>
      </div>
    </main>
  );
}

export default Main;
