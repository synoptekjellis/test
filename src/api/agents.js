const agents = [
  {
    address: '180 Peachtree Street NW Atlanta, GA 30303',
    latitude: 33.758567,
    longitude: -84.387874,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'South Atlantic',
    notes: '',
    name: 'AT1',
    isAgent: true,
    id: 1,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: '1905 Lunt Avenue Elk Grove, IL 60007',
    latitude: 42.001171,
    longitude: -87.954882,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'East North Central',
    notes: '',
    name: 'CH3',
    isAgent: true,
    id: 46499
  },
  {
    address: '1950 North Stemmons Freeway Dallas, TX 75207',
    latitude: 32.800703,
    longitude: -96.81919,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'West South Central',
    notes: '',
    name: 'DA6',
    isAgent: true,
    id: 2,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: '21721 Filigree Court Ashburn, VA 20147',
    latitude: 39.015023,
    longitude: -77.45861,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'South Atlantic',
    notes: '',
    name: 'DC6',
    isAgent: true,
    id: 3,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: '1920 East Maple Avenue El Segundo, CA 90245',
    latitude: 33.926046,
    longitude: -118.394061,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'Pacific',
    notes: '',
    name: 'LA3',
    isAgent: true,
    id: 47477
  },
  {
    address: '800 Secaucus Road Secaucus, NJ 07094',
    latitude: 40.778738,
    longitude: -74.071541,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'Middle Atlantic',
    notes: '',
    name: 'NY5',
    isAgent: true,
    id: 5,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: '2020 Fifth Avenue Seattle, WA 98121',
    latitude: 47.614429,
    longitude: -122.339749,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'Pacific',
    notes: '',
    name: 'SE3',
    isAgent: true,
    id: 6,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: '9 Great Oaks Boulevard San Jose, CA 95119',
    latitude: 37.242004,
    longitude: -121.781706,
    type: 'SVC Location',
    city_state: null,
    country: 'US',
    region: 'Pacific',
    notes: '',
    name: 'SV5',
    isAgent: true,
    id: 7,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: 'Science Park 610 1098 XH Amsterdam Netherlands',
    latitude: 52.354925,
    longitude: 4.96096,
    type: 'SVC Location',
    city_state: null,
    country: 'NL',
    region: 'Northern Europe',
    notes: '',
    name: 'AM3',
    isAgent: true,
    id: 8,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: 'Lärchenstrasse 110 Frankfurt 65933 Germany',
    latitude: 50.097939,
    longitude: 8.587964,
    type: 'SVC Location',
    city_state: null,
    country: 'DE',
    region: 'Western Europe',
    notes: '',
    name: 'FR4',
    isAgent: true,
    id: 9,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address:
      '8 Buckingham Avenue, Slough Trading Estate Slough Berkshire SL1 4AX United Kingdom',
    latitude: 51.522124,
    longitude: -0.62975,
    type: 'SVC Location',
    city_state: null,
    country: 'UK',
    region: 'Northern Europe',
    notes: '',
    name: 'LD5',
    isAgent: true,
    id: 10,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address:
      'Unit 1703 - 04, 17/F Kerry Warehouse (Tsuen Wan), 3 Shing Yiu Street, Kwai Chung, N.T., Hong Kong',
    latitude: 22.362497,
    longitude: 114.119078,
    type: 'SVC Location',
    city_state: null,
    country: 'CH',
    region: 'East Asia',
    notes: '',
    name: 'HK2',
    isAgent: true,
    id: 11,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address:
      'Nishi Shinsaibashi Building 1-26-1 Shinmachi Nishi-ku, Osaka City, Osaka, Japan 550-0013',
    latitude: 34.675774,
    longitude: 135.495551,
    type: 'SVC Location',
    city_state: null,
    country: 'JP',
    region: 'East Asia',
    notes: '',
    name: 'OS1',
    isAgent: true,
    id: 12,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: '15 Pioneer Walk, Singapore 627753',
    latitude: 1.321502,
    longitude: 103.695359,
    type: 'SVC Location',
    city_state: null,
    country: 'SG',
    region: 'South East Asia',
    notes: '',
    name: 'SG2',
    isAgent: true,
    id: 13,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address: '200 Bourke Road, Alexandria, Sydney NSW 2015 Australia',
    latitude: -33.918205,
    longitude: 151.189364,
    type: 'SVC Location',
    city_state: null,
    country: 'AU',
    region: 'Australia',
    notes: '',
    name: 'SY4',
    isAgent: true,
    id: 14,
    ignoreApi: true //remove this when you add to thousand eyes.
  },
  {
    address:
      'North Tower, Otematchi Financial City, Otemachi, 1-9-5, Chiyoda-ku, Tokyo, Japan 100-0004',
    latitude: 35.687654,
    longitude: 139.76577,
    type: 'SVC Location',
    city_state: null,
    country: 'JP',
    region: 'East Asia',
    notes: '',
    name: 'TY4',
    isAgent: true,
    id: 15,
    ignoreApi: true //remove this when you add to thousand eyes.
  }
];

export default agents;
