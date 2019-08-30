### Create React app set up with :

1. response file
2. All components and containers to be created to be created
3. CSS files

### Set REQUIREMENT.md with :

i. the description of Project and
ii.. the requirements
iii. based on the requirement, deduce the tests to be written

### Process:

1. Install Enzyme
   `npm install -D enzyme enzyme-adapter-react-16`

2. Import libraries required
   `import React from "react"; import { configure, shallow } from "enzyme";`
   `import Adapter from "enzyme-adapter-react-16";`
   `// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.`
   `import { createSerializer } from "enzyme-to-json";`
   `import component from "path/componenet";`
   `configure({ adapter: new Adapter() });`
