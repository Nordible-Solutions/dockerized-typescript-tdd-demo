import { commandParser } from "./parkingLotFunctions";
import * as fs from 'fs';

const main = async (path) => {

    // Make sure we got a filename on the command line.
    if (path.length < 3) {
        console.log(`You need to pass the input text file path`);

    } else if (!fs.existsSync(path[2])) {
        console.log('Invalid file path');
    }
    else {
        fs.readFile(path[2], 'utf8', async (err, data) => {
            let inputSplit = data.split("\n");
            for (let i = 0; i < inputSplit.length; i++) {                
                console.log(await commandParser(inputSplit[i]));
            }
        });
    }
}

main(process.argv);
