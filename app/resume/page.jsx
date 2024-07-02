"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa"

import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiTypescript, 
  SiApachekafka, 
  SiRedis, 
  SiSocketdotio,
  SiDocker,
  SiPython,
  SiGithub 
  } from "react-icons/si"

  const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    info: [
      {
        fieldName:"Name",
        fieldValue:"Roshan Kumar"

      },
      {
        fieldName:"Phone",
        fieldValue:"(+91) 9182463994"

      },
      {
        fieldName:"Github",
        fieldValue:"www.github.com/itsroshanharry"

      },
      {
        fieldName:"LinkedIn",
        fieldValue:"www.linkedin.com/in/itsroshanharry"

      },
      {
        fieldName:"Nationality",
        fieldValue:"Indian"

      },
      {
        fieldName:"Freelance",
        fieldValue:"Available"

      },
      {
        fieldName:"Languages",
        fieldValue:"English, Telugu, Hindi"

      },

    ]
  }

  const education = {
    icon:'/assets/resume/cap.svg',
    title:"My Education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
      {
        institution: "Teegala Krishna Reddy Engineering College",
        degree: "Bachelor of Technology in Computer Science Engineering",
        duration: "2020-2024"
      },
      {
        institution: "Narayana Junior College",
        degree: "Intermediate",
        duration: "2078-2020"
      },
    ]
  }

  const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <SiTypescript />,
        name: "typescript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiTailwindcss/>,
        name: "tailwindcss",
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "Nextjs",
      },
      {
        icon: <SiMongodb />,
        name: "mongodb",
      },
      {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
      },
      {
        icon: <SiGithub />,
        name: "github",
      },
      {
        icon: <SiSocketdotio />,
        name: "socket.io",
      },
      {
        icon: <SiApachekafka />,
        name: "Apache Kafka",
      },
      {
        icon: <SiRedis />,
        name: "redis",
      },
      {
        icon: <SiGithub />,
        name: "github",
      },
      {
        icon: <SiDocker />,
        name: "docker",
      },
      {
        icon: <SiPython />,
        name: "python",
      },
    ]
  }

  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

  import { ScrollArea } from "@/components/ui/scroll-area";

  import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1,
    transition: {delay:2.4, duration:0.4, ease:'easeIn'}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto">
      <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
          <TabsTrigger value="education" >Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>

        </TabsList>
        <div className="min-h-[70vh] w-full">
        <TabsContent value="education" className="w-full">
        education
        </TabsContent>
        <TabsContent value="skills" className="w-full">
        skills
        </TabsContent>
        <TabsContent value="about" className="w-full">
        about
        </TabsContent>
        </div>
      </Tabs>
    </div>
    Resume page</motion.div>
  )
}

export default Resume