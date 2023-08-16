import Link from 'next/link';

function Header() {
    return (
      <div className="sticky top-0 flex items-center justify-between p-5 bg-violet text-white">
        <p className="font-mango text-2xl">Divine</p>
        <div className="flex justify-between font-bold w-1/3">
            <Link href="/">Home</Link>
            <Link href="../experience">Experience</Link>
            <a>Projects</a>
            <a>Contact</a>
        </div>
      </div>
    );
  }
  
export default Header;