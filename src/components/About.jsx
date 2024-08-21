import {motion} from "framer-motion"
import mine from "../assets/mine.jpg"

const move=(delay)=>({
    initial:{x:-100,opacity:0},
    animate:{
        x:0,opacity:1,
        transition:{
            duration:0.3,
            delay:delay,
        }
    }
})

function About() {
    return (
      <>
        <div className="grid grid-cols-2 mx-4 md:mx-14 p-5 my-10 md:border md:border-black border border-white text-white duration-700">
          <div className="border-white px-5 py-15 md:py-20">
                <motion.h1
                variants={move(0.1)}
                initial="initial"
                animate="animate"
                ><span className="text-2xl">Hey,I'm</span><br/>
                    <span className="text-2xl md:text-5xl">BHARATH KUMAR KARE</span>
                </motion.h1>
                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3,delay:0.3}}
                 className="mt-5 underline text-blue-400">Full Stack Developer
                </motion.h1>
                <motion.p 
                variants={move(0.6)}
                initial="initial"
                animate="animate"
                className="text-lg mt-10">I'm an enthusiastic learner of Full Stack Develovepement where I'm building my own project, So far I'm using Reactjs,Nodejs,Tailwindcss which makes WebDevelopement Faster.I'm also learner of <span className="underline text-blue-600">python</span>.
                </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-10 md:pt-20 md:pl-32 flex justify-center"
            >
              <img src={mine} alt="profileimg" className="h-64 rounded-lg" />
            </motion.div>
      </div>
    </>
  );
}
export default About