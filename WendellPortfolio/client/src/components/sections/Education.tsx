import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    institution: "Fr. Conceicao Rodrigues College of Engineering",
    degree: "Bachelor of Engineering",
    year: "2020 - Present",
    description: "Currently pursuing B.E. with focus on Computer Science and Engineering"
  },
  {
    institution: "St. Xavier's College",
    degree: "Higher Secondary Education",
    year: "2018 - 2020",
    description: "Completed HSC with focus on Science and Mathematics"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full p-3 bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">{item.institution}</h3>
                      <p className="text-lg text-muted-foreground">{item.degree}</p>
                      <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{item.year}</span>
                      </div>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}