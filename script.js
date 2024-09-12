let root = document.getElementById('root');
let content = "JBJKBWJBG JKWBJKWB@";
let rootdiv = ReactDOM.createRoot(root);

let Component = () => {
  return (
    <div className="parent overflow-x-hidden bg-gray-100">
      <nav className="flex justify-between items-center p-2 gradient border-b border-slate-300 relative">
        <div className="logo ml-3">
            <a href="#" className="inline-flex items-center gap-2"><svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)"></rect>
                <path className="plane-take-off fill-white" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "></path>
                </svg>
                <span className="font-bold text-3xl text-white">LANDING</span>
            </a>  
        </div>
        <div className="nav-links flex gap-5 mr-3 hidden md:flex">
            <a href="#" className="nav-link ease-in duration-150 hover:text-neutral-600 border border-transparent hover:border-black hover:rounded-lg">Home</a>
            <a href="#" className="nav-link ease-in duration-150 hover:text-neutral-600 border border-transparent hover:border-black hover:rounded-lg">About</a>
            <a href="#" className="nav-link ease-in duration-150 hover:text-neutral-600 border border-transparent hover:border-black hover:rounded-lg">Services</a>
            <a href="#" className="nav-link ease-in duration-150 hover:text-neutral-600 border border-transparent hover:border-black hover:rounded-lg">Contact</a>
        </div>
        <div id="menu" className="ease-in duration-150 md:hidden block hover:cursor-pointer text-white hover:scale-50">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </div>
        <div className="list w-full left-5 top-20 h-46 hidden absolute overflow-hidden">
            <ul className="bg-white flex flex-col gap-2 p-5">
                <li><a href="#" className="font-bold text-lg">Active</a></li>
                <li className="ease-in duration-150 hover:scale-105"><a href="#" className="hover:text-slate-400">link</a></li>
                <li className="ease-in duration-150 hover:scale-105"><a href="#" className="ease-in duration-150 hover:text-slate-400">link</a></li>
                <li className="ease-in duration-150 hover:scale-105"><button className="rounded-2xl shadow p-2 py-3 text-slate-500">Action</button></li>
            </ul>
        </div>
     </nav>
     <div className="hero-wrapper gradient">
        <div className="hero gradient flex flex-col gap-5 md:flex-row md:gap-0">
            <div className="hero-content flex flex-col gap-5 mt-7 ml-7 items-center md:items-start">
                <p className="text-white text-center">What business are you?</p>
                <h1 className="text-white text-4xl text-center md:text-start md:text-5xl">Main Hero Message to sell yourself!</h1>
                <p className="text-white text-xl text-center">Sub-hero message, not too long and not too short. Make it just right!</p>
                <button className="py-2 px-3 text-zinc-700 bg-white rounded-2xl font-medium ease-in duration-150 w-28 hover:text-black">Subscribe</button>
            </div>
            <div className="hero-img">
                <img src="https://tailwindtoolbox.github.io/Landing-Page/hero.png" alt=""/>
            </div>
        </div>
      </div>  
      <div className="title mt-10">
        <div className="title-head">
            <p className="text-4xl text-slate-600 font-semibold text-center">Title</p>
            <div className="divider h-1 rounded-lg w-56 mx-auto bg-pink-300 mt-2"></div>
        </div>
        <div className="title-cards flex flex-col mt-10 gap-6 md:flex-row md:justify-around items-center md:items-start md:gap-3 p-5">
            <div className="card bg-white flex flex-col w-3/4 md:w-1/3 shadow-2xl rounded px-4 py-2">
                <p>xGETTING STARTED</p>
                <p className="text-black font-bold my-2 text-lg">Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, expedita sed!</p>
                <div className="button mt-9 text-center md:text-start">
                    <button className="gradient ease-in duration-300 rounded-3xl py-3 px-6 text-neutral-800 font-semibold hover:text-white">Action</button>
                </div>
            </div>
            <div className="card bg-white flex flex-col shadow-2xl rounded px-4 py-2 w-3/4 md:w-1/3">
                <p>xGETTING STARTED</p>
                <p className="text-black font-bold my-2 text-lg">Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, expedita sed!</p>
                <div className="button mt-9 text-center md:text-start">
                    <button className="gradient ease-in duration-300 rounded-3xl py-3 px-6 text-neutral-800 font-semibold hover:text-white">Action</button>
                </div>
            </div>
            <div className="card bg-white flex flex-col shadow-2xl rounded px-4 py-2 w-3/4 md:w-1/3 ">
                <p>xGETTING STARTED</p>
                <p className="text-black font-bold my-2 text-lg">Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, expedita sed!</p>
                <div className="button mt-9 text-center md:text-start">
                    <button className="gradient ease-in duration-300 rounded-3xl py-3 px-6 text-neutral-800 font-semibold hover:text-white">Action</button>
                </div>
            </div>
        </div>
    </div>
    <div className="pricing my-9">
        <div className="title-head">
            <p className="text-4xl text-slate-600 font-semibold text-center">Pricing</p>
            <div className="divider h-1 rounded-lg w-56 mx-auto bg-pink-300 mt-2"></div>
        </div>
        <div className="pricing-cards mt-9 flex flex-col gap-5 items-center md:items-end md:justify-center md:flex-row md:gap-0">
            <div className="card w-3/4 bg-white md:w-56 border shadow py-5">
                <h2 className="text-slate-600 font-medium text-xl p-5 text-center">Free</h2>
                <div className="divider h-1 w-full bg-gray-300 mt-4"></div>
                <p className="text-sm text-center border-b py-4">Thing</p>
                <p className="text-sm text-center border-b py-4">Thing</p>
                <p className="text-sm text-center border-b py-4">Thing</p>
                <p className="text-center font-bold text-slate-700 mt-8"><span className="text-3xl font-semibold">£0 </span>for one user</p>
                <div className="text-center mt-4">
                    <button className="gradient py-3 px-6 text-white rounded-full">Sign Up</button>
                </div>
            </div>
            <div className="card h-30 bg-white border shadow-lg md:shadow-2xl py-5 w-3/4 md:w-56">
                <h2 className="text-slate-800 font-bold text-2xl p-5 text-center">Basic</h2>
                <div className="divider h-1 w-full gradient mt-4"></div>
                <p className="text-sm text-center border-b py-4 font-bold">Thing</p>
                <p className="text-sm text-center border-b py-4 font-bold">Thing</p>
                <p className="text-sm text-center border-b py-4 font-bold">Thing</p>
                <p className="text-sm text-center border-b py-4 font-bold">Thing</p>
                <p className="text-center font-bold text-slate-700 mt-8"><span className="text-3xl font-semibold">£x.99 </span>/ per user</p>
                <div className="text-center mt-4">
                    <button className="gradient py-3 px-6 text-white rounded-full">Sign Up</button>
                </div>
            </div>
            <div className="card w-3/4 bg-white md:w-56 border shadow py-5">
                <h2 className="text-slate-600 font-medium text-xl p-5 text-center">Pro</h2>
                <div className="divider h-1 w-full bg-gray-300 mt-4"></div>
                <p className="text-sm text-center border-b py-4">Thing</p>
                <p className="text-sm text-center border-b py-4">Thing</p>
                <p className="text-sm text-center border-b py-4">Thing</p>
                <p className="text-center font-bold text-slate-700 mt-8"><span className="text-3xl font-semibold">£x.99 </span>for one user</p>
                <div className="text-center mt-4">
                    <button className="gradient py-3 px-6 text-white rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    <div className="action gradient py-14">    
        <h1 className="text-center text-5xl text-white font-bold">Call to Action</h1>
        <div className="h-1 w-36 bg-slate-200 mx-auto mt-4 rounded"></div>
        <p className="text-center text-2xl text-white font-semibold mt-8">Main Hero Message to sell yourself!</p>
        <div className="button text-center mt-9">
            <button className="gradient py-3 px-6 text-white rounded-full">Action!</button>
        </div>
    </div>
    <footer className="mt-14 flex flex-col md:gap-8 md:flex-row">
        <div className="logo ml-3">
            <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
              <rect fill="pink" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)"></rect>
              <path className="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "></path>
            </svg>
            LANDING
          </a>
        </div>
          <div className="content md:w-3/5 flex flex-col items-center md:justify-between md:flex-row md:items-start">
            <div className="links flex flex-col md:flex-col">
                <p className="text-lg font-medium text-zinc-600 my-3">LINKS</p>
                <p>FAQ</p>
                <p>Help</p>
                <p>Support</p>
            </div>
            <div className="legal flex-row md:flex-col">
                <p className="text-lg font-medium text-zinc-600 my-3">LEGAL</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className="social flex-row md:flex-col">
                <p className="text-lg font-medium text-zinc-600 my-3">SOCIAL</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="company flex-row md:flex-col">
                <p className="text-lg font-medium text-zinc-600 my-3">COMPANY</p>
                <p>Official Blog</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            </div>
    </footer>
    </div>
  );
};

rootdiv.render(<Component />);
