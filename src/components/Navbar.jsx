import logo from '../assets/logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin,faGithub,faTwitter} from "@fortawesome/free-brands-svg-icons"
import gmail from '../assets/gmail.png'
import {motion} from 'framer-motion'

const move=(delay)=>({
    initial:{y:0},
    animate:{
        y:[1,-1],
        transition:{
            duration:1.5,
            delay:delay,
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

function Navbar() {
    return (
      <>
        <div className="flex flex-row sm:flex-row justify-between text-center text-white mx-4 my-4 p-4">
          <div>
            <img src={logo} alt="logo" className="h-12 mx-auto" />
          </div>
          <div className="flex gap-6 sm:gap-10 text-center">
                <motion.div
                variants={move(0)}
                initial="initial"
                animate="animate"
                >
                    <a href="https://github.com/bharathk1213" target='_blank'><FontAwesomeIcon icon={faGithub} className="text-gray-400" size='2x'/></a>
                </motion.div>
                <motion.div
                variants={move(1)}
                initial="initial"
                animate="animate"
                >
                    <a href="https://www.linkedin.com/in/kare-bharath-kumar-b8042721b/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="text-blue-700" size='2x'/></a>
                </motion.div>
                <motion.div
                variants={move(1)}
                initial="initial"
                animate="animate"
                >
                    <a href="bharathkumark1017@gmail.com" target='_blank'><img src={gmail} /></a>
                </motion.div>
                <motion.div
                variants={move(0)}
                initial="initial"
                animate="animate"
                >
                    <a href="https://x.com/Bharath57197232" target='_blank'><FontAwesomeIcon icon={faTwitter} className="text-blue-500" size='2x'/></a>
                </motion.div>
                
            </div>
        </div>
        </>
    );
}

export default Navbar