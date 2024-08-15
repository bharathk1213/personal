import { motion } from 'framer-motion';
import maldives from '../assets/maldives.jpg';

const move = (delay) => ({
    initial: { opacity: 0,y:14 },
    whileInView: {
        opacity: 1,y:0,
        transition: {
            duration: 0.6,
            delay: delay,
        }
    }
});

function Projects() {
    const works = [
        {
            title: 'Project1',
            img: maldives,
            descript: "This project is still in work and is a travel service website, being done by Reactjs and Fetch API's",
            delay:0.5
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center gap-10 mt-10 mx-4 p-5 sm:mx-8 md:mx-14 lg:mx-20">
                <motion.div
                variants={move(0.3)}
                initial="initial"
                whileInView="whileInView"
                 className="text-white text-2xl">
                    <h1 className="mt-6 text-white text-center">MY WORKS so far..</h1>
                </motion.div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            variants={move(work.delay)}
                            initial="initial"
                            whileInView="whileInView"
                            className="flex flex-col py-5 px-3 rounded-md items-center justify-center text-center text-white bg-green-700/20 hover:scale-105 duration-500"
                        >
                            <img src={work.img} alt="image" className="h-40 w-full sm:w-48 md:w-64 rounded-md mb-4"/>
                            <h1 className="text-lg font-semibold">{work.title}</h1>
                            <p className='text-white text-sm mt-5'>{work.descript}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
