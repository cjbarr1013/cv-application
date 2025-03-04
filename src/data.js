let userData = {
  name: 'Cameron Barr',
  email: 'cjbarr1013@gmail.com',
  phone: '3303248723',
  address: '1943 Dogwood Square NE Bolivar, Ohio 44612',
  education: [
    {
      school: 'University of Akron',
      degree: "Bachelor's in Mechanical Engineering",
      gradDate: '2019-05',
      id: crypto.randomUUID(),
    },
    {
      school: 'University of Akron',
      degree: "Bachelor's in Mechanical Engineering",
      gradDate: '2019-05',
      id: crypto.randomUUID(),
    },
  ],
  experience: [
    {
      company: 'Meteor Sealing Systems',
      position: 'Process Engineer',
      startDate: '2019-11',
      endDate: '2021-10',
      responsibilities: [
        {
          text: 'Troubleshooting and maintenance of various machines utilizing pneumatics, electronics, and hydraulics.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Trained technicians and operators on troubleshooting methods and best operating practices.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Developed, reviewed, and corrected control plans and FMEAs for various manufacturing processes.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Implemented corrective actions on the production floor to resolve different quality issues.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Wrote and implemented SWIs for various manufacturing processes.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Performed several industrial engineering duties including time studies, run @ rates, floor layouts, and process flows.',
          id: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
    },
  ],
};

export default userData;
