let userData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  education: [
    {
      school: '',
      degree: '',
      gradDate: '',
      id: crypto.randomUUID(),
    },
  ],
  experience: [
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      responsibilities: [
        {
          text: '',
          id: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
    },
  ],
};

export default userData;
