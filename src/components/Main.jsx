import { useState } from 'react';
import Dropdown from './Dropdown.jsx';
import Button from './Button.jsx';
import plus from '../assets/icons/plus.svg';
import minus from '../assets/icons/minus.svg';
import minusBox from '../assets/icons/minus-box.svg';
import '../styles/Main.css';

function Main() {
  const [openDropdownID, setOpenDropdownID] = useState('');
  const [eduItemDelShowing, setEduItemDelShowing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Cameron Barr',
    email: 'cjbarr1013@gmail.com',
    phone: '3303248723',
    education: [
      {
        school: 'University of Akron',
        degree: "Bachelor's in Mechanical Engineering",
        gradDate: '2019-11',
        id: crypto.randomUUID(),
      },
      {
        school: 'University of Akron',
        degree: "Bachelor's in Mechanical Engineering",
        gradDate: '2019-11',
        id: crypto.randomUUID(),
      },
    ],
    experience: [
      {
        company: 'Meteor Sealing Systems',
        position: 'Process Engineer',
        startDate: 'November 2019',
        endDate: 'October 2021',
        responsibilities: [
          'Troubleshooting and maintenance of various machines utilizing pneumatics, electronics, and hydraulics.',
          'Trained technicians and operators on troubleshooting methods and best operating practices.',
          'Developed, reviewed, and corrected control plans and FMEAs for various manufacturing processes.',
          'Implemented corrective actions on the production floor to resolve different quality issues.',
          'Wrote and implemented SWIs for various manufacturing processes.',
          'Performed several industrial engineering duties including time studies, run @ rates, floor layouts, and process flows.',
        ],
        id: crypto.randomUUID(),
      },
    ],
  });

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
    console.log(id);
    setUserInfo({
      ...userInfo,
      education: educationObjs,
    });
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
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={userInfo.name}
                    onChange={(e) => handleNameChange(e)}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={userInfo.email}
                    onChange={(e) => handleEmailChange(e)}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={userInfo.phone}
                    onChange={(e) => handlePhoneChange(e)}
                  />
                </div>
              </div>
            </Dropdown>
            <Dropdown
              open={openDropdownID === 'education' ? true : false}
              text="Education"
              handleClick={handleDropdownClick}
            >
              <div className="education-container">
                <div className="education-items">
                  {userInfo.education.map((item, index) => {
                    return (
                      <div key={item.id}>
                        {eduItemDelShowing && (
                          <div className={'edu-item-del-container'}>
                            <button
                              className="item-del-btn"
                              onClick={() =>
                                handleDelEducationItemClick(item.id)
                              }
                            >
                              <img
                                alt="item delete button"
                                src={minusBox}
                              ></img>
                            </button>
                          </div>
                        )}
                        <div className="edu-input-container">
                          <div>
                            <label htmlFor="school">School</label>
                            <input
                              type="text"
                              id="school"
                              value={item.school}
                              onChange={(e) =>
                                handleEducationChange(e, index, 'school')
                              }
                            />
                          </div>
                          <div>
                            <label htmlFor="degree">Degree</label>
                            <input
                              type="text"
                              id="degree"
                              value={item.degree}
                              onChange={(e) =>
                                handleEducationChange(e, index, 'degree')
                              }
                            />
                          </div>
                          <div>
                            <label htmlFor="grad-year">Graduation Date</label>
                            <input
                              type="month"
                              id="grad-year"
                              value={item.gradDate}
                              onChange={(e) =>
                                handleEducationChange(e, index, 'gradDate')
                              }
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="edu-btns">
                  <Button
                    className="add-edu"
                    image={plus}
                    altText="add new item"
                    handleClick={handleAddEducationClick}
                  ></Button>
                  <Button
                    className="del-edu"
                    image={minus}
                    altText="delete item"
                    handleClick={handleDelEducationClick}
                  ></Button>
                </div>
              </div>
            </Dropdown>
            <Dropdown
              open={openDropdownID === 'experience' ? true : false}
              text="Experience"
              handleClick={handleDropdownClick}
            ></Dropdown>
          </div>
          <div className="document-options">
            <Dropdown
              open={openDropdownID === 'formatting' ? true : false}
              text="Formatting"
              openDirection="up"
              handleClick={handleDropdownClick}
            ></Dropdown>
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
