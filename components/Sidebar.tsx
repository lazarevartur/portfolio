import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <Image
        src="/user_avatar.webp"
        alt="user avatar"
        width={500}
        height={500}
        className='w-32 h-32 mx-auto rounded-full'
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Artur</span>
        Zub
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full">Web Developer</p>
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full" href="" download='name'>
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div>
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillInstagram className="w-8 h-8" />
        </a>
      </div>

      <div>
        <div>
          <GoLocation className="w-6 h-6" />
          <span>Israil, netaniya</span>
        </div>
        <p>viart.pro@gmail.com</p>
        <p>0936722361</p>
      </div>
      <button>Email button</button>
      <button>Toggle theme</button>
    </div>
  );
};

export default Sidebar;
