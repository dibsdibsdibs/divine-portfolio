import { motion } from "framer-motion";

export default function AboutBackground(){
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
                }
            };
        }
    };

    return(
        <>
            <motion.svg
                className="absolute inset-0 w-full h-full z-0"
                initial="hidden"
                animate="visible"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
            >
                <motion.rect
                    width="400"
                    height="400"
                    stroke="#EBE7E6"
                    strokeWidth="1px"
                    custom={1}
                    variants={draw}
                    transform="rotate(93, 200, 200)"
                    x={75}
                    y={75}
                />
                <motion.rect
                    width="400"
                    height="400"
                    stroke="#EBE7E6"
                    strokeWidth="1px"
                    custom={2}
                    variants={draw}
                    transform="rotate(66, 200, 200)"
                    x={-75}
                    y={175}
                />
                <motion.rect
                    width="400"
                    height="400"
                    stroke="#EBE7E6"
                    strokeWidth="1px"
                    custom={3}
                    variants={draw}
                    transform="rotate(37, 200, 200)"
                    x={-275}
                    y={200}
                />
            </motion.svg>
            <motion.svg
                className="absolute inset-0 w-full h-full z-0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <motion.circle
                    fill="#EBE7E6"
                    r="40"
                    cx={650}
                    cy={400}
                />
                <motion.circle
                    fill="#BD9DEA"
                    r="60"
                    cx={800}
                    cy={200}
                />
                <motion.circle
                    fill="#EA7186"
                    r="20"
                    cx={1000}
                    cy={50}
                />
                <motion.circle
                    fill="#F2C76E"
                    r="100"
                    cx={1225}
                    cy={250}
                />
            </motion.svg>
        </>
    )
}