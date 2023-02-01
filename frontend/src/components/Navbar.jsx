import { useScrollPosition} from './hooks';

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
    
  return <div className={classNames("navbar", 'bg-[#FFDBCB]', scrollPosition > 0 ?'shadow' : 'shadow-none', 'sticky top-0 z-10  transition-shadow',)}>
    <div className="navbar-start pl-r">
      <div className="avatar">
        <div className="w-10 rounded ml-8">
          <img src="/images/logo.png" alt="JU Logo"/>
        </div>
      </div>
      <p className="ml-2 bg-[#FFDBCB] text-[#4D4D4D] font-semibold text-[30px] font-jacques">JONG UNS</p>
      </div>
    <div className="navbar-center hidden lg:flex font-poppins">
      <ul className="menu menu-horizontal px-1">
        <li><a href="/" className="text-[#4D4D4D] text-[20px] hover:font-bold active:font-bold  bg-transparent px-10">Home</a></li>
        <li><a href="#about" className="text-[#4D4D4D] text-[20px] hover:font-bold active:font-bold bg-transparent px-10">About</a></li>
      </ul>
    </div>
    <div className="navbar-end font-poppins mr-8">
      <a href="/quiz" className="text-[#4D4D4D] text-[20px] border-[1px] border-[#4D4D4D] px-[38px] py-[6px] bg-transparent hover:bg-[#fe7529] hover:border-transparent hover:shadow-lg hover:font-bold hover:text-white rounded-full">Quiz</a>
    </div>
</div>
};
  
  export default Navbar;