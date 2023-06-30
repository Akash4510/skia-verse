import { event1 } from '../../constants/images';

const initialState = [
  {
    id: 1,
    title: 'Stuck in the Sound',
    description:
      'This competition is organized by Enigma, computer science club of Mahindra University,Hyderabad,The Quiz is based on fundamental of programming. You have to submit only one illustration. The deadline for work submission is 28 October 2022.',
    img: event1,
    bannerImg: event1,
    organiser: 'Synolo',
    status: 'Ongoing',
    pricePool: 30000,
    noOfRegistrations: 256,
    location: 'Courtyard',
    mode: 'offline',
    type: 'Hackathon',
    participationType: 'group',
    minMembers: '1',
    maxMembers: '4',
    startDate: '04-12-2022',
    endDate: '08-12-2022',
    startTime: '8:00 AM',
    endTime: '5:00 PM',
    judgingMode: 'judges',
    isPrivate: false,
  },
];

const eventListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case 'RESET_EVENT_LIST':
      return initialState;

    default:
      return state;
  }
};

export default eventListReducer;