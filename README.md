# A. Project overview

This project uses the following tech stack to implement the solution of the problem statement mentioned in **section C**

- `Node.js`
- `Typescript`
- `ES 6`
- `Jest`

# B. How to test this project?

**To install all dependencies, run tests and generate coverage report:**
`$ bash bin/setup.sh`

**To run the code so it accepts input from a file:**
`$ bash bin/parking_lot.sh ~/usr/abc/input.txt`

# C. Problem statement

I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is
given a number starting at 1 increasing with increasing distance from the entry point
in steps of one. I want to create an automated ticketing system that allows my
customers to use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The
ticket issuing process includes us documenting the registration number (number
plate) and the colour of the car and allocating an available parking slot to the car
before actually handing over a ticket to the driver (we assume that our customers are
nice enough to always park in the slots allocated to them). The customer should be
allocated a parking slot which is nearest to the entry. At the exit the customer returns
the ticket with the time the car was parked in the lot, which then marks the slot they
were using as being available. Total parking charge should be calculated as per the
parking time. Charge applicable is $10 for first 2 hours and $10 for every additional
hour.
We interact with the system via a simple set of commands which produce a specific
output. Please take a look at the example below, which includes all the commands you need to support - they're self explanatory. The system should accept a filename
as a parameter at the command prompt and read the commands from that file.

Example: File 

To install all dependencies, compile and run tests: $ bin/setup

To run the code so it accepts input from a file: $ bin/parking_lot file_inputs.txt 
 
Commands 
 
• Create parking lot of size n : `create_parking_lot {capacity}` 

• Park a car : `park {car_number}`

• Remove(Unpark) car from : `leave {car_number} {hours}` 

• Print status of parking slot : `status`

Input - refer to `bin/input.txt`
 
Output - refer to `bin/outpur.txt` 
 
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