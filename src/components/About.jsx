import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='About Me' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        My name is Kyrylo Ivashkov. I&apos;m self-taught front-end developer from Dnipro, Ukraine. I graduated from the Dnipropetrovsk
                        National University of Railway Transport named after academician V.Lazaryan in 2017 with a Specialist&apos;s degree in Railway
                        transport. From 2017 to 2022. I worked as a Project Engineer in a private company and as a freelancer. But in 2022, I made a
                        life-changing decision to quit my job and dive headfirst into the exciting realm of frontend development, marking the
                        beginning of my passionate journey into this dynamic field.
                    </p>
                </article>
            </div>
        </section>
    );
};
export default About;
