import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Study Jams | Coding group in Vienna, Austria', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A coding community in Vienna, Austria for all who wish to join.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'A coding community in Vienna for',
  name: 'all',
  subtitle: 'who wish to join.',
  cta: 'Come to Study Jams!',
  coc: 'Check out our Code of Conduct',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne:
    "We're a volunteer-run study group for all things programming. Heavy emphasis on all things.",
  paragraphTwo:
    'Our goal is to learn all things coding together, and that is in the loosest sense of the word. Be it through projects, challenges, or even just having a chat, the aim is to learn!',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const detailsData = [
  {
    id: uuidv1(),
    img: 'wikidata.jpg',
    title: 'Where we meet',
    // info:
    // "We meet at Wikimedia Austria's office, where they also occasionally host amazing Wikidata Wednesdays workshops with us! ",
    // info2: 'Stolzenthalergasse 7/1, 1080 Vienna, Austria',
    // info3: '(photo courtesy of Manfred Werner (WMAT), CC BY-SA 4.0)',
    info: 'We meet on the world wide internet!',
    info2: 'Join us through the following link (open only from 18:30 on the day):',
    info3: 'https://floridsdorf.mittenin.at/study-jams',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'chums.jpg',
    title: 'When do you meet?',
    info: 'Every two weeks (from 18:30 to 21:00):',
    info2: 'Wednesday, 3rd of June',
    info3: 'Wednesday, 17th of June',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const conductData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/study_jams',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
