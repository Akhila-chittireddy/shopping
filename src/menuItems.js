export const menuItems = [      
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Fashion',
    url: '/Fashion',
    submenu: [
      {
        title: 'Menclothes',
        url: 'Menclothes',
      },
      {
        title: 'Womenclothes',
        url: 'Womenclothes',
        submenu: [
          {
            title: 'Ethnic',
            url: 'Ethnic',
          },
          {
            title: 'Casual',
            submenu: [
              {
                title: 'Western',
                url: 'Western',
              },
              {
                title: 'Traditional',
                url: 'Traditional',
              },
            ],
          },
        ],
      },
      {
        title: 'Sports',
        url: 'Sports',
      },
    ],
  },
  {
    title: 'Electric',
    url: '/Electric',
    submenu: [
      {
        title: 'Household',
        url: 'Household',
      },
      {
        title: 'Office',
        url: 'Office',
      },
    ],
  },
];
