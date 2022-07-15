import { motion } from "framer-motion"

const AnimatePage = ({ children }) => {

    const animations = {
        initial: { opacity: 0.1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return <motion.div
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.9 }}
    >
        {children}
    </motion.div>
}


export default AnimatePage