import Link from 'next/link';

const StudentInfo = () => {
  const githubRepositoryUrl = 'https://github.com/ClippyCat/cprg306-assignments';

  return (
    <div>
      <h2>Name: Melody Shih</h2>
      <p>Course Section: CPRG306b</p>
      <p>
        <Link href={githubRepositoryUrl}>
          GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
