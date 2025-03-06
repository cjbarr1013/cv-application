let userData = {
  name: 'John Johnson III',
  email: 'itz_ya_boi_jj3@gmail.com',
  phone: '(555)-320-2456',
  address: '748 Westinghouse Blvd. Columbus, OH 43085',
  education: [
    {
      school: 'Columbus State Community College',
      degree: 'Baking Certificate',
      gradDate: '1972-12',
      id: crypto.randomUUID(),
    },
    {
      school: "St. John's High School",
      degree: 'High School Diploma',
      gradDate: '1970-05',
      id: crypto.randomUUID(),
    },
  ],
  experience: [
    {
      company: 'Self-Employed',
      position: 'Independent Sales Specialist',
      startDate: '2016-09',
      endDate: '2024-12',
      responsibilities: [
        {
          text: 'Developed and maintained a loyal, repeat customer base through word-of-mouth marketing and referrals.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Managed sourcing, pricing, and delivery logistics to ensure customer satisfaction and maximize profits.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Operated within a highly competitive, fast-moving marketplace while maintaining discretion and professionalism',
          id: crypto.randomUUID(),
        },
        {
          text: 'Negotiated complex transactions and resolved disputes effectively to maintain strong business relationships.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Adapted quickly to shifting regulations and market trends to sustain consistent revenue growth.',
          id: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
    },
    {
      company: 'Petsmart',
      position: 'Sales Representative',
      startDate: '1972-03',
      endDate: '2016-09',
      responsibilities: [
        {
          text: 'Delivered customized sales solutions, tailoring offerings to meet diverse customer needs.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Exceeded sales targets through persuasive communication and a deep understanding of customer demand.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Managed inventory and pricing strategies to optimize profitability.',
          id: crypto.randomUUID(),
        },
        {
          text: 'Handled financial transactions with accuracy and accountability.',
          id: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
    },
  ],
};

export default userData;
