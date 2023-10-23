import StudentInfo from '../app/StudentInfo';
import Links from '../app/links';

const links = [
  { text: 'Week2', url: '/week2' }, // Corrected the typo here
  { text: 'Week3', url: '/week3' }, // Corrected the typo here
  { text: 'Week4', url: '/week4' },
  { text: 'Week5', url: '/week5' },
  { text: 'Week6', url: '/week6' }
];

const HomePage = () => {
  return (
    <main>
      <h1>CPRG 306</h1>
      <StudentInfo />
      <h2>Pages</h2>
      <Links links={links} />
    </main>
  );
};

export default HomePage;
