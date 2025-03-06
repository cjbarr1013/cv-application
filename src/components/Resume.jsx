import '../styles/Resume.css';
import { format, addMonths } from 'date-fns';

function Resume({ font, userInfo }) {
  return (
    <div className={'resume-preview' + ' ' + font}>
      <div className="resume-contact">
        <h1>{userInfo.name}</h1>
        <div>
          {(userInfo.phone !== '' || userInfo.email !== '') && (
            <p>{`${userInfo.phone} | ${userInfo.email}`}</p>
          )}
          <p>{userInfo.address}</p>
        </div>
      </div>
      <div className="resume-edu">
        <h2>Education</h2>
        <div>
          {userInfo.education.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  {(item.degree !== '' || item.school !== '') && (
                    <>
                      <b>{item.degree}</b>, <span>{item.school}</span>
                    </>
                  )}
                </p>
                <p>
                  <i>
                    {item.gradDate !== '' &&
                      format(addMonths(new Date(item.gradDate), 1), 'MMMM y')}
                  </i>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resume-exp">
        <h2>Experience</h2>
        <div>
          {userInfo.experience.map((item) => {
            const startDate =
              item.startDate !== '' ?
                format(addMonths(new Date(item.startDate), 1), 'MMMM y')
              : '';
            const endDate =
              item.endDate !== '' ?
                format(addMonths(new Date(item.endDate), 1), 'MMMM y')
              : '';

            return (
              <div key={item.id}>
                <div>
                  <p>
                    {(item.position !== '' || item.company !== '') && (
                      <>
                        <b>{item.position}</b>, <span>{item.company}</span>
                      </>
                    )}
                  </p>
                  <p>
                    {(startDate || endDate) && (
                      <i>{`${startDate} - ${endDate}`}</i>
                    )}
                  </p>
                </div>
                <ul>
                  {item.responsibilities.map((subitem) => {
                    if (subitem.text !== '') {
                      return <li key={subitem.id}>{subitem.text}</li>;
                    }
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;
