import { faReact, faNodeJs, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const move = (delay) => ({
    initial: { opacity: 0,y:14 },
    whileInView: {
        opacity: 1,y:0,
        transition: {
            duration: 1,
            delay: delay
        }
    }
});

function Skills() {
    const icons = [
        {
            icon: faReact,
            color: '#0000FF',
            delay: 0.1
        },
        {
            icon: faNodeJs,
            color: '#00FF00',
            delay: 0.3
        },
        {
            icon: faGithub,
            color: '#778899',
            delay: 0.5
        },
        {
            icon: faPython,
            color: '#FFFF33',
            delay: 0.7
        }
    ];

    return (
        <>
        <div className="flex flex-col gap-14 mt-10 mx-4 md:mx-14 p-5">
            <motion.div 
            variants={move(0.3)}
            initial="initial"
            whileInView="whileInView"
            className="text-white text-2xl">
              <h1 className="mt-6 text-center">SKILLS</h1>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-center">
                    {icons.map((icon, index) => (
                        <motion.div
                            key={index}
                            variants={move(icon.delay)}
                            initial="initial"
                            whileInView="whileInView"
                            className="text-center"
                        >
                            <FontAwesomeIcon icon={icon.icon} size="3x" color={icon.color} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skills;
