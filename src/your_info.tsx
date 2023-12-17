//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl =
  "https://images.wallpaperscraft.com/image/single/man_photographer_roof_146991_3840x2400.jpg"

// Enter here your first and last name
const name = {
  firstname: "Ryan",
  lastname: "Oliver",
  // Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: "https://www.linkedin.com/in/devryanoliver/",
}

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  "Software Engineer...",
  "Rocket League Addict...",
  "Dad Joke Enthusiast...",
]

// Social media profiles buttons
const socialProfiles = [
  {
    name: "LinkedIn",
    icon: "lni lni-linkedin",
    url: "https://www.linkedin.com/in/devryanoliver/",
  },
  {
    name: "GitHub",
    icon: "lni lni-github",
    url: "https://github.com/oliver-ryan9008",
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
]

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////

const categories = [
  {
    name: "Software Engineering",
    icon: "lni lni-code",
    title: "Software Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: "lni lni-typescript",
        title: "Javascript/Typescript",
      },
      {
        icon: "lni lni-react",
        title: "React",
      },
      {
        icon: "lni lni-github",
        title: "CI/CD",
      },
    ],
  },
  {
    name: "Software",
    icon: "lni lni-code",
    title: "Software",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: "lni lni-adobe",
        title: "adobe",
      },
      {
        icon: "lni lni-code",
        title: "Code",
      },
      {
        icon: "lni lni-sketch",
        title: "Sketch",
      },
    ],
  },
  {
    name: "brands",
    icon: "lni lni-code",
    title: "Brands",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: "lni lni-pinterest",
        title: "Pinterest",
      },
      {
        icon: "lni lni-crop",
        title: "Crop",
      },
    ],
  },
]

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: "bullshit", value: 100, unit: "%" },
  { word: "finished projects", value: 7500, unit: "" },
  { word: "experience", value: 20, unit: " years" },
]

// If you already have some projects, fill the url
const projectData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    demoUrl: "https://wallpaperaccess.com/full/530366.jpg",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    demoUrl: "https://wallpapercave.com/wp/wp1933134.jpg",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    demoUrl:
      "https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    demoUrl: "src/assets/images/Jonathan Dominion Template.gif",
  },
]

//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////

// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Jonathan. With 20 years of experience as photographer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.
    `,
  power_slogan: `Lorem ipsum dolor sit amet`,
}

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID.
// Fill them here and it will automatically work.

const emailConfig = {
  serviceID: "service_XXXXXXX",
  templateID: "template_XXXXXXXX",
  userID: "XXXXXXXXXXXX",
}

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
}
