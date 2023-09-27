import developerImg from '../assets/developer.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Hero = () => {
    return (
        <div className='bg-emerald-100 py-24'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-5xl text-center font-bold tracking-wider md:text-7xl md:text-left'>I&apos;m Kyrylo</h1>
                    <p className='mt-4 text-3xl text-center text-slate-700 capitalize tracking-wide md:text-left'>Front-End Developer</p>
                    <p className='mt-2 text-lg text-center text-slate-700 capitalize tracking-wide md:text-left'>
                        turning ideas into interactive reality
                    </p>
                    <div className='flex gap-x-4 mt-4 justify-center sm:justify-start'>
                        <a href='https://github.com/KirG1T' target='_blank' rel='noreferrer'>
                            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href='https://linkedin.com/in/kyrylo-ivashkov' target='_blank' rel='noreferrer'>
                            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href='mailto:kirillivashkovwork@gmail.com' target='_blank' rel='noreferrer'>
                            <BiLogoGmail className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={developerImg} className='h-80 lg:h-96' />
                </article>
            </div>
        </div>
    );
};
export default Hero;
