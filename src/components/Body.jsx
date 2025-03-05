import { useState } from 'react';
import Dropdown from './Dropdown.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Resume from './Resume.jsx';
import userData from '../data.js';
import plus from '../assets/icons/plus.svg';
import minus from '../assets/icons/minus.svg';
import '../styles/Body.css';

function Body() {
  const [openDropdownID, setOpenDropdownID] = useState('contact');
  const [eduItemDelShowing, setEduItemDelShowing] = useState(false);
  const [expItemDelShowing, setExpItemDelShowing] = useState(false);
  const [layout, setLayout] = useState(1);
  const [font, setFont] = useState('Inter');
  const [color, setColor] = useState('#FFFFFF');
  const [userInfo, setUserInfo] = useState(userData);

  function handleDropdownClick(e) {
    const dropdownID = e.currentTarget.parentElement.id;
    dropdownID !== openDropdownID ?
      setOpenDropdownID(dropdownID)
    : setOpenDropdownID('');
  }

  function handleNameChange(e) {
    setUserInfo({
      ...userInfo,
      name: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setUserInfo({
      ...userInfo,
      email: e.target.value,
    });
  }

  function handlePhoneChange(e) {
    setUserInfo({
      ...userInfo,
      phone: e.target.value,
    });
  }

  function handleAddressChange(e) {
    setUserInfo({
      ...userInfo,
      address: e.target.value,
    });
  }

  function handleEducationChange(e, index, subItem) {
    let educationObjs = [...userInfo.education];
    let newObj = { ...educationObjs[index] };
    newObj[subItem] = e.target.value;
    educationObjs[index] = newObj;

    setUserInfo({
      ...userInfo,
      education: educationObjs,
    });
  }

  function handleAddEducationClick() {
    let educationObjs = [...userInfo.education];
    educationObjs.push({
      school: '',
      degree: '',
      gradDate: '',
      id: crypto.randomUUID(),
    });

    setUserInfo({
      ...userInfo,
      education: educationObjs,
    });
  }

  function handleDelEducationClick() {
    eduItemDelShowing ?
      setEduItemDelShowing(false)
    : setEduItemDelShowing(true);
  }

  function handleDelEducationItemClick(id) {
    let educationObjs = userInfo.education.filter((item) => item.id !== id);

    setUserInfo({
      ...userInfo,
      education: educationObjs,
    });
  }

  function handleExperienceChange(e, index, subItem, subIndex = null) {
    let experienceObjs = [...userInfo.experience];
    let newObj = { ...experienceObjs[index] };
    if (subIndex !== null) {
      console.log(newObj);
      newObj[subItem][subIndex].text = e.target.value;
    } else {
      newObj[subItem] = e.target.value;
    }
    experienceObjs[index] = newObj;

    setUserInfo({
      ...userInfo,
      experience: experienceObjs,
    });
  }

  function handleAddExperienceClick() {
    let experienceObjs = [...userInfo.experience];
    experienceObjs.push({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      responsibilities: [{ text: '', id: crypto.randomUUID() }],
      id: crypto.randomUUID(),
    });

    setUserInfo({
      ...userInfo,
      experience: experienceObjs,
    });
  }

  function handleDelExperienceClick() {
    expItemDelShowing ?
      setExpItemDelShowing(false)
    : setExpItemDelShowing(true);
  }

  function handleDelExperienceItemClick(id) {
    let experienceObjs = userInfo.experience.filter((item) => item.id !== id);

    setUserInfo({
      ...userInfo,
      experience: experienceObjs,
    });
  }

  function handleAddResponsibilityItemClick(expIndex) {
    let experienceObjs = [...userInfo.experience];
    let newObj = { ...experienceObjs[expIndex] };
    newObj.responsibilities.push({
      text: '',
      id: crypto.randomUUID(),
    });
    experienceObjs[expIndex] = newObj;

    setUserInfo({
      ...userInfo,
      experience: experienceObjs,
    });
  }

  function handleDelResponsibilityItemClick(expIndex, id) {
    let experienceObjs = [...userInfo.experience];
    let newObj = { ...experienceObjs[expIndex] };
    newObj.responsibilities = newObj.responsibilities.filter(
      (item) => item.id !== id
    );
    experienceObjs[expIndex] = newObj;

    setUserInfo({
      ...userInfo,
      experience: experienceObjs,
    });
  }

  function handleLayoutChange(e) {
    setLayout(e.target.value);
  }

  function handleFontChange(e) {
    setFont(e.target.value);
  }

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <main>
      <div className="content-container">
        <div className="options">
          <div className="content-options">
            <Dropdown
              open={openDropdownID === 'contact' ? true : false}
              text="Contact"
              handleClick={(e) => handleDropdownClick(e)}
            >
              <div className="contact-container">
                <Input
                  label="Name"
                  id="name"
                  type="text"
                  value={userInfo.name}
                  handleChange={(e) => handleNameChange(e)}
                ></Input>
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  value={userInfo.email}
                  handleChange={(e) => handleEmailChange(e)}
                ></Input>
                <Input
                  label="Phone"
                  id="phone"
                  type="tel"
                  value={userInfo.phone}
                  handleChange={(e) => handlePhoneChange(e)}
                ></Input>
                <Input
                  label="Address"
                  id="address"
                  type="text"
                  value={userInfo.address}
                  handleChange={(e) => handleAddressChange(e)}
                ></Input>
              </div>
            </Dropdown>
            <Dropdown
              open={openDropdownID === 'education' ? true : false}
              text="Education"
              handleClick={handleDropdownClick}
            >
              <div className="edu-exp-container">
                <div className="edu-exp-items">
                  {userInfo.education.map((item, index) => {
                    return (
                      <div key={item.id}>
                        {eduItemDelShowing && (
                          <div className={'item-del-container'}>
                            <Button
                              className="item-del-btn"
                              image={minus}
                              altText="delete item"
                              handleClick={() =>
                                handleDelEducationItemClick(item.id)
                              }
                            ></Button>
                          </div>
                        )}
                        <div className="edu-exp-input-container">
                          <Input
                            label="School"
                            id={`school-${index + 1}`}
                            type="text"
                            value={item.school}
                            handleChange={(e) =>
                              handleEducationChange(e, index, 'school')
                            }
                          ></Input>
                          <Input
                            label="Degree"
                            id={`degree-${index + 1}`}
                            type="text"
                            value={item.degree}
                            handleChange={(e) =>
                              handleEducationChange(e, index, 'degree')
                            }
                          ></Input>
                          <Input
                            label="Graduation Date"
                            id={`grad-date-${index + 1}`}
                            type="month"
                            value={item.gradDate}
                            handleChange={(e) =>
                              handleEducationChange(e, index, 'gradDate')
                            }
                          ></Input>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="edu-exp-btns">
                  <Button
                    className="add-edu-exp"
                    image={plus}
                    altText="add new item"
                    handleClick={handleAddEducationClick}
                  ></Button>
                  <Button
                    className="del-edu-exp"
                    image={minus}
                    altText="delete item"
                    handleClick={handleDelEducationClick}
                  ></Button>
                </div>
                {userInfo.education.length > 2 && (
                  <div className="filler">.</div>
                )}
              </div>
            </Dropdown>
            <Dropdown
              open={openDropdownID === 'experience' ? true : false}
              text="Experience"
              handleClick={handleDropdownClick}
            >
              <div className="edu-exp-container">
                <div className="edu-exp-items">
                  {userInfo.experience.map((item, index) => {
                    return (
                      <div key={item.id}>
                        {expItemDelShowing && (
                          <div className={'item-del-container'}>
                            <Button
                              className="item-del-btn"
                              image={minus}
                              altText="delete item"
                              handleClick={() =>
                                handleDelExperienceItemClick(item.id)
                              }
                            ></Button>
                          </div>
                        )}
                        <div className="edu-exp-input-container">
                          <Input
                            label="Company"
                            id={`company-${index + 1}`}
                            type="text"
                            value={item.company}
                            handleChange={(e) =>
                              handleExperienceChange(e, index, 'company')
                            }
                          ></Input>
                          <Input
                            label="Position"
                            id={`position-${index + 1}`}
                            type="text"
                            value={item.position}
                            handleChange={(e) =>
                              handleExperienceChange(e, index, 'position')
                            }
                          ></Input>
                          <Input
                            label="Start Date"
                            id={`start-${index + 1}`}
                            type="month"
                            value={item.startDate}
                            handleChange={(e) =>
                              handleEducationChange(e, index, 'startDate')
                            }
                          ></Input>
                          <Input
                            label="End Date"
                            id={`end-${index + 1}`}
                            type="month"
                            value={item.endDate}
                            handleChange={(e) =>
                              handleEducationChange(e, index, 'endDate')
                            }
                          ></Input>
                          <div className="resp-container">
                            <fieldset>
                              <legend>Responsibilities</legend>
                              {item.responsibilities.map(
                                (subItem, subIndex) => {
                                  return (
                                    <div key={subItem.id}>
                                      <div className={'subitem-del-container'}>
                                        <Button
                                          className="subitem-del-btn"
                                          image={minus}
                                          altText="delete responsibility"
                                          handleClick={() =>
                                            handleDelResponsibilityItemClick(
                                              index,
                                              subItem.id
                                            )
                                          }
                                        ></Button>
                                      </div>
                                      <input
                                        type="text"
                                        id={`responsibility-${index + 1}-${subIndex + 1}`}
                                        value={subItem.text}
                                        onChange={(e) =>
                                          handleExperienceChange(
                                            e,
                                            index,
                                            'responsibilities',
                                            subIndex
                                          )
                                        }
                                      />
                                    </div>
                                  );
                                }
                              )}
                            </fieldset>
                            <Button
                              className="subitem-add-btn"
                              image={plus}
                              altText="add new responsibility"
                              handleClick={() =>
                                handleAddResponsibilityItemClick(index)
                              }
                            ></Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="edu-exp-btns">
                  <Button
                    className="add-edu-exp"
                    image={plus}
                    altText="add new item"
                    handleClick={handleAddExperienceClick}
                  ></Button>
                  <Button
                    className="del-edu-exp"
                    image={minus}
                    altText="delete item"
                    handleClick={handleDelExperienceClick}
                  ></Button>
                </div>
                {userInfo.experience.length > 0 && (
                  <div className="filler">.</div>
                )}
              </div>
            </Dropdown>
          </div>
          <div className="document-options">
            <Dropdown
              open={openDropdownID === 'formatting' ? true : false}
              text="Formatting"
              openDirection="up"
              handleClick={handleDropdownClick}
            >
              <div className="formatting-container">
                <div className="my-input">
                  <label htmlFor="layout">Layout</label>
                  <select name="layout" id="layout">
                    <option value="layout-1">Layout 1</option>
                    <option value="layout-2">Layout 2</option>
                    <option value="layout-3">Layout 3</option>
                  </select>
                </div>
                <Input
                  label="Color"
                  id="color"
                  type="color"
                  value={color}
                  handleChange={(e) => handleColorChange(e)}
                ></Input>
                <div className="my-input">
                  <label htmlFor="font">Font</label>
                  <select name="font" id="font">
                    <option value="font-1">Font 1</option>
                    <option value="font-2">Font 2</option>
                    <option value="font-3">Font 3</option>
                  </select>
                </div>
              </div>
            </Dropdown>
            <div className="document-btns">
              <Button text="RESET" className="reset" />
              <Button text="PRINT" className="print" />
            </div>
          </div>
        </div>
        <Resume
          layout={layout}
          font={font}
          color={color}
          userData={userData}
        ></Resume>
      </div>
    </main>
  );
}

export default Body;
