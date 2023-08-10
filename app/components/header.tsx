function Header() {
    return (
      <div className="flex items-center justify-between p-5 bg-violet text-white">
        <p className="font-mango text-2xl">Divine</p>
        <div className="flex justify-between font-bold w-1/3">
            <a>Home</a>
            <a>Experience</a>
            <a>Projects</a>
            <a>Contact</a>
        </div>
      </div>
    );
  }
  
export default Header;