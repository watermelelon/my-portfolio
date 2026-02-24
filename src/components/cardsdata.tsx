import React from "react";

export interface CardType {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

export const cards: CardType[] = [
  {
    title: "Eye-Q Vision",
    description: "Computer Vision used to detect faces and facial gestures",
    src: "../../eyeqbanner.png",
    ctaText: "View Project",
    ctaLink: "https://github.com/watermelelon/face-detection-opencv",
    content: () => (
      <p className="whitespace-pre-line">

        As a student, it was easy to see many sleepy faces through the day, either on class on campus, so i thought it 
        would be fun to build a project that could detect those sleepy faces and hopefully help people improve understand sleep better. 

        <br></br>
        <br></br>
        The main goal of this personal project is to get more familiar with computer vision techniques, specifically using OpenCV. 
        I implemented a system that detects faces and recognizes specific facial gestures, such as blinking and yawning. The next 
        steps for this project include improving face recognition accuracy, adding more gesture detection capabilities, 
        and training the model using ML tools. 
        <br></br>
        <br></br>
        The main tools used for this project include <strong>Python, OpenCV, MediaPipe.</strong>

      </p>
    ),
  },

  {
    title: "Startec",
    description: "Cleaning Space Debris",
    src: "../../startecbanner.png",
    ctaText: "View Project",
    ctaLink: "../../Startec_Presentation.pdf",
    content: () => (
      <p className="whitespace-pre-line">

        STARTEC is a project that was developed during <strong>Airbus Cafe</strong>, a unique class offered at <strong> Hochschule Bremen </strong>
        that allows students from different disciplines to work on real-world challenges provided by Airbus. For my term, the project focused on addressing the issue of
         space debris, which poses a significant threat to satellites and space missions.

        <br></br>
        <br></br>
        The main outcomes of this project where working on an interdisciplinary team, learning the steps involved in desiging 
        a solution for a real-world problem (from research, prototyping, and testing to pitching, budgeting, and project management), 
        and finally presenting the results to a panel of Airbus experts. 
        <br></br>
        <br></br>
        My part of the project included researching about the topic, designing the use cases diagrams, making feasibility analysis and 
        financial estimations. 
        
      </p>
    ),
  },


  {
    title: "Arkadia Website",
    description: "Complete website redesign for a data analytics company",
    src: "../../arkadiabannerUPD.png",
    ctaText: "View Project",
    ctaLink: "https://www.arkadiaanalytics.com/",
    content: () => (
      <p className="whitespace-pre-line">

        This project was done among a team of 4 people and we were in charge of redesigning the website of Arkadia Analytics, 
        a data analytics company based in the US. 
        The main goal of this project was to create a more modern and user-friendly website that better represents the company's brand and services.

        <br></br>
        <br></br>
        My main part of the project was to design the Blog page, including its functionality, while also contributing to the design of the rest of the website. 
        This includes designing the layout, components, choosing the color scheme, and creating the overall look and feel of the website. 
        <br></br>
        <br></br>
        The main tools used for this project include <strong>Figma, React, Tailwind CSS.</strong>
        
      </p>
    ),
  },





  {
    title: "Zenda Solution",
    description: "Startup focused on AI-driven automation",
    src: "../../zendabannerUPD.png",
    ctaText: "View Project",
    ctaLink: "https://www.zendasolution.com/",
    content: () => (
      <p className="whitespace-pre-line">
        Zenda Solution is a startup that focuses on providing AI-driven automation solutions for businesses.
        Founded on July 2025, the main goal of this project is to design and develop tools that help businesses 
        be more efficient, organized and productive in their daily operations.
        <br></br>
        <br></br>
        For this project, I am responsible for designing the website, product design (automations), 
        and overall branding. Similarly, I'm responsible for checking overall operations of the company. 
        <br></br>
        <br></br>
        The main tools used for this project include <strong>n8n, WhatsAppAPI, Meta Developers</strong> and for the
        website development I used tools like <strong>tailwind CSS, React.js, and Github.</strong>

      </p>
    ),
  },


   {
    title: "Riposte",
    description: "Social Media Scheduler",
    src: "../../ripostebanner.png",
    ctaText: "View Project",
    ctaLink: "https://github.com/watermelelon/scheduler",
    content: () => (
       <p className="whitespace-pre-line">

        This was a project which I developed during my last year of university as part of the 'Advanced Project' course, 
        where the main goal was to develop a project from scratch, starting with the ideation phase, then moving on to the design and development phases, 
        and finally testing and presenting the final product.

        <br></br>
        <br></br>
        We were a group of 5 people, and we developed a social media scheduler called 'Riposte', which allows
        users to schedule their social media posts in advance, as well as providing AI tools to generate content. I was 
        in charge of the front-end development and design, as well as the login and authentication system. 
        <br></br>
        <br></br>
        The main tools used for this project include <strong>Tailwind CSS, Google OAuth, MongoDB, and Vercel.</strong>

      </p>
    ),
  },

  {
    title: "WalletWise",
    description: "Financial Management App",
    src: "../../walletwisebanner.png",
    ctaText: "View Project",
    ctaLink: "https://www.canva.com/design/DAGYHqkdoig/4byGB6afLh4cTDZ87JE91g/view?utm_content=DAGYHqkdoig&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h10418fe9cd",
    content: () => (
      <p className="whitespace-pre-line">

        Walletwise was a project developed during my 'Cloud Computing'course, where the main goal was to design 
        and develop a cloud-based application. 

        <br></br>
        <br></br>
        I ended up developing a financial management app, which allows users to track their expenses, 
        set budgets, and get insights about their spending habits. This was possible thanks to the use of AWS 
        tools, such as AWS Textract, which allowed us to extract information from receipts and invoices, 
        and AWS Lambda, which allowed us to run the backend code without having to manage servers.
        <br></br>
        <br></br>
        The main tools used for this project include <strong>Python, AWS S3, AWS Lambda, and AWS Textract.</strong>

      </p>
    ),
  },


  
  

  
   {
    title: "Logo Designs",
    description: "Personal creative work in logo design",
    src: "../../logosbannerUPD.png",
    ctaText: "View Project",
    ctaLink: "https://www.canva.com/design/DAHCHhUPZQ4/NANqbLS2YxGIMfPOc2FbtQ/view?utm_content=DAHCHhUPZQ4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd5c7990a17",
    content: () => (
      <p className="whitespace-pre-line">
        Over the years, I have had the opportunity to work on various logo design projects and contests, 
        which has allowed me to develop my skills in graphic design and branding. 
        <br></br>
        <br></br>
        As a result, some of my logos have been the winner of design contests, while others 
        ended up as finalists. Personally, I find logo design to be a very rewarding and creative process, 
        as it allows me to think out of the box and condense concepts or ideas into a single visual representation.
        <br></br>
        <br></br>
        The main tools used for this type of projects include <strong>Concepts App, and Canva.</strong>

      </p>
    ),
  },


  {
    title: "GingerBread Animation",
    description: "Blender animation",
    src: "../../gingerbanner.png",
    ctaText: "View Project",
    ctaLink: "https://youtu.be/zqK-Sm0fmQ8?si=oe48p1LFaqgHWNql",
    content: () => (
       <p className="whitespace-pre-line">

        This is an animation i made during a 'Computer Graphics' course, where the main goal was
        to learn the basics of 3D modeling and animation using Blender.
        

        <br></br>
        <br></br>
        Our task was to create a short animation of around 60 seconds displaying a story using characters of our choice. 
        On the technical side, we had to learn how to model, rig, and animate the characters, as well as how to 
        use lighting and rendering techniques to create a visually appealing animation. It was a challenging yet rewarding 
        project for me as I was able to combine my creatiity with technical skills to bring a story to life
        through animation. 

        <br></br>
        <br></br>
        The main tools used for this project include <strong>Blender and Sketchfab.</strong>

      </p>
    ),
  },

 


];