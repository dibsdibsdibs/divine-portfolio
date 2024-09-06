import { motion } from "framer-motion";

export default function Title({title}: any){
    return(
        <>
            <motion.article
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="flex justify-center items-center sm:text-7xl text-5xl select-none"
            >
                <motion.h1
                    className="font-bold z-30"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    {title}
                </motion.h1>
                <motion.h1
                    className="font-bold text-pink absolute sm:mt-2 sm:ml-2.5 mt-1 ml-1.5 z-20"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    {title}
                </motion.h1>
            </motion.article>
        </>
    )
}
