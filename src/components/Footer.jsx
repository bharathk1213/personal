import {motion} from 'framer-motion'

const move=(delay)=>({
  initial:{opacity:0,y:10},
  whileInView:{
    opacity:1,y:0,
    transition:{
      duration:1,
      delay:delay,
    }
  }
})

function Footer() {
    return (
      <footer className="text-white text-center mt-20 py-4 mb-10">
        <motion.h1 
        variants={move(0.2)}
        initial="initial"
        whileInView="whileInView"
        className="text-xl mb-2">Contact me:</motion.h1>
        <motion.p
        variants={move(0.5)}
        initial="initial"
        whileInView="whileInView"
        >Email: <a href="bharathkumark1017@gmail.com" className="underline text-blue-400">bharathkumark1017@gmail.com</a></motion.p>
        <motion.p
        variants={move(0.7)}
        initial="initial"
        whileInView="whileInView"
        >Phone: <a href="+917075217746" className="underline text-blue-400">+917075217746</a></motion.p>
      </footer>
    );
}
  
export default Footer;
  