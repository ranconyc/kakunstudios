import Link from 'next/link';
import Section from '../components/Section';

const Custom404 = () => {
  return (
    <Section className="h-screen grid place-items-center">
      <div className="text-center w-1/2">
        <h1>מצטערים העמוד שחיפשת לא קיים</h1>
        <Link href="/">
          <a className="text-orange-500 hover:cursor-pointer"> חזרה לבית</a>
        </Link>
      </div>
    </Section>
  );
};

export default Custom404;
