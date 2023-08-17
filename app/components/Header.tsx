import Link from 'next/link';

function Header() {
    return (
      <div className="sticky top-0 flex items-center justify-between p-5 bg-violet text-white">
        <p className="font-mango text-2xl">Divine</p>
        <div className="flex justify-between font-bold w-1/4">
            <Link href="/">Home</Link>
            <Link href="../experience">Experience</Link>
            <Link href="../projects">Projects</Link>
        </div>
      </div>
    );
  }
  
export default Header;