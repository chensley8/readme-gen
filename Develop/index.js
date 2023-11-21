
const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {type: 'input',
    name: 'projectName',
    message: 'Enter your project name:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a short description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing guidelines:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: [
        "Academic Free License v3.0",
        "Apache license 2.0, Artistic license 2.0", 
        "Boost Software License 1.0", 
        "BSD 2-clause Simplified license", 
        "BSD 3-clause New or Revised license", 
        "BSD 3-clause Clear license", 
        "BSD 4-clause Original or Old license", 
        "BSD Zero-Clause license", 
        "Creative Commons license family", 
        "Creative Commons Zero v1.0 Universal", 
        "Creative Commons Attribution 4.0", 
        "Creative Commons Attribution ShareAlike 4.0", 
        "Do What The F*ck You Want To Public License", 
        "Educational Community License v2.0", 
        "Eclipse Public License 1.0", 
        "Eclipse Public License 2.0", 
        "European Union Public License 1.1", 
        "GNU Affero General Public License v3.0", 
        "GNU General Public License family", 
        "GNU General Public License v2.0", 
        "GNU General Public License v3.0", 
        "GNU Lesser General Public License family",
        "GNU Lesser General Public License v2.1", 
        "GNU Lesser General Public License v3.0", 
        "ISC", 
        "LaTeX Project Public License v1.3c", 
        "Microsoft Public License", 
        "MIT", 
        "Mozilla Public License 2.0", 
        "Open Software License 3.0", 
        "PostgreSQL License", 
        "SIL Open Font License 1.1", 
        "University of Illinois/NCSA Open Source License", 
        "The Unlicense", 
        "zLib License",
    ]  },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github username',  
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter email address',  
    }
];


inquirer.prompt(questions).then((answers) => {
    const readmeContent = `
  # ${answers.projectName}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## License
  ${answers.license}

  ## Questions
  Find me on GitHub: [${answers.github}](https://github.com/${answers.github})
  Email me for more info: ${answers.email}
    `;
  


    fs.writeFileSync('README.md', readmeContent, 'utf-8');
  
    console.log('README.md generated successfully!');
  });

