import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Let's connect and discuss opportunities</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Card className="transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <CardContent className="pt-6">
              <div className="space-y-6 text-center">
                <Button
                  variant="outline"
                  className="w-full justify-center transition-all duration-300 hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:wendell.dsouza@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    wendell.dsouza@example.com
                  </a>
                </Button>

                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="w-full transition-all duration-300 hover:bg-primary/10" asChild>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full transition-all duration-300 hover:bg-primary/10" asChild>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full transition-all duration-300 hover:bg-primary/10" asChild>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}