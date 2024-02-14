// ? next Image
import Image from "next/image";
// ? next Link
import Link from "next/link";

// ? icons
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return <div className="  mx-auto  xl:mx-0">
    
    <Link href={'/work'} className="group relative 
    w-[90px] h-[90px] flex justify-center items-center 
    bg-circleStar bg-cover bg-center bg-no-repeat   ">
      <Image 
      src={'/rounded-text.png'} width={60} height={60}
      alt=""
      className="animate-spin-slow w-full h-full max-w-[74px] 
      max-h-[74px]"
      />
      <HiArrowRight 
      className="absolute text-2xl group-hover:translate-x-2
      transition-all duration-300" />
    </Link>
  </div>
};

export default ProjectsBtn;
