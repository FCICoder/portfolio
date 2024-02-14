// ? next Image
import Image from "next/image";
// ? next Link
import Link from "next/link";

// ? icons
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link href={'/work'} className="relative 
    w-[100px] h-[100px] flex justify-center items-center 
    bg-circleStar bg-cover bg-center bg-no-repeat group ">
      <Image 
      src={'/rounded-text.png'} width={70} height={70}
      alt=""
      className="animate-spin-slow w-full h-full max-w-[70px]
      max-h-[70px]"
      />
      <HiArrowRight 
      className="absolute text-2xl group-hover:translate-x-2
      transition-all duration-300" />
    </Link>
  </div>
};

export default ProjectsBtn;
