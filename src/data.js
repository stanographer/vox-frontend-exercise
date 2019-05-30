const initialState = {
  columns: {
    'queue': {
      id: 'queue',
      title: 'Queue',
      storyIds: ['0', '1', '2', '3', '4'],
    },
    'live': {
      id: 'live',
      title: 'Live on the page',
      storyIds: [],
    }
  },
  columnOrder: ['queue', 'live'],
  stories: {
    '0': {
      id:'0',
      title: 'Must go faster... go, go, go, go, go!',
      author: 'David Levinson',
      publishedTime: new Date(2019, 3, 12, 8, 55),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    '1': {
      id:'1',
      title: 'Is this my espresso machine?',
      author: 'Alistair Hennessey',
      publishedTime: new Date(2019, 2, 23, 13, 5),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    '2': {
      id:'2',
      title: 'What do they got in there? King Kong?',
      author: 'Dr. Ian Malcolm',
      publishedTime: new Date(2019, 2, 12, 11, 35),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    '3': {
      id:'3',
      title: 'So you two dig up, dig up dinosaurs?',
      author: 'Dr. Ian Malcolm',
      publishedTime: new Date(2019, 2, 2, 12, 5),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    '4': {
      id:'4',
      title: 'You really think you can fly that thing?',
      author: 'David Levinson',
      publishedTime: new Date(2019, 1, 2, 10, 5),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
  },
};

export {
  initialState
};