import { motion } from "framer-motion";
import { Calendar, Users, Lightbulb, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Extracurricular() {
  // Sample extracurricular activities data
  const activities = [
    {
      id: 1,
      title: "Hackathon Participation",
      organization: "TechFest 2023",
      period: "March 2023",
      description: "Participated in a 48-hour hackathon and developed a solution for sustainable energy management.",
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      tags: ["Teamwork", "Problem Solving", "Innovation"],
    },
    {
      id: 2,
      title: "Open Source Contribution",
      organization: "GitHub",
      period: "2022 - Present",
      description: "Active contributor to various open-source projects, helping improve documentation and fixing bugs.",
      icon: <Users className="h-5 w-5 text-primary" />,
      tags: ["Collaboration", "Coding", "Community"],
    },
    {
      id: 3,
      title: "Tech Community Moderator",
      organization: "Dev Community",
      period: "2022 - Present",
      description: "Volunteer moderator for a tech community, organizing events and facilitating discussions.",
      icon: <Users className="h-5 w-5 text-primary" />,
      tags: ["Leadership", "Communication", "Event Management"],
    },
    {
      id: 4,
      title: "Coding Competition Winner",
      organization: "CodeFest 2022",
      period: "November 2022",
      description: "First place in the algorithmic problem solving competition, demonstrating strong technical skills.",
      icon: <Trophy className="h-5 w-5 text-amber-500" />,
      tags: ["Algorithms", "Problem Solving", "Achievement"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="extracurricular" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Beyond professional work, I engage in various activities that enhance my skills and network
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{activity.organization}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{activity.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
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