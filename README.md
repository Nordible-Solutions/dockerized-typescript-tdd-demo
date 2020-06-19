# A. Project overview

This project is a demo of dockerized Typescript implementation inspired by Test driven development approach.

This project uses the following tech stack to implement the solution of the problem statement mentioned in **section C**

- `Node.js`
- `Typescript`
- `ES 6`
- `Jest`

# B. How to test this project?

**To install all dependencies, run tests and generate coverage report:**
`sh bin/setup` or `bash bin/setup`

**To run the code so it accepts input from a file:**
`sh bin/parking_lot ~/usr/abc/input.txt` or `bash bin/parking_lot ~/usr/abc/input.txt`

**To run the code from docker container:**

First build the docker image: `docker build -t parking_lot:latest .`

Enter the image's shell: `docker run -it parking_lot:latest`

Now to do project setup, run `sh bin/setup` in the image's shell.

Now to run the project with input file, run `sh bin/parking_lot bin/input.txt` in the image's shell.

# C. Problem statement

Read problem-statement.md

# D. Development and code inspection

Refer to `package.json` file for knowing where to look for core of the sourcecode:

- Run `npm run dev` to develop changes on the fly and see them getting updated without restarting the project
- Run `npm start <FILENAME.txt>` to start the project
- Run `npm test` to run the tests
- Run `npm run coverage` to generate the test coverage report

Note: `FILENAME.txt` needs to be in the format as per `bin/input.txt`

# E. Environment

- `node v12.16.1`
- `npm 6.13.4`
