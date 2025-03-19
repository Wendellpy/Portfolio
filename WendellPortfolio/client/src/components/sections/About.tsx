import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-32 bg-muted/50">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            About Me
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Card className="transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <CardContent className="pt-6 space-y-4">
                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed"
                >
                  I'm a passionate engineering student at Fr. Conceicao Rodrigues College of Engineering, 
                  focused on building innovative solutions through technology. With a strong foundation in 
                  engineering principles and a keen interest in software development, I strive to create 
                  meaningful impact through my work.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed"
                >
                  My journey in technology has equipped me with both technical expertise and problem-solving 
                  skills, allowing me to approach challenges with creativity and precision. I'm constantly 
                  learning and exploring new technologies to stay at the forefront of innovation.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}