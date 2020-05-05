let parkingSlots = [];
let lotSize = 0;

/**
 * create_parking_lot command
 * @param howManyLots no. of slots in the parking
 */
let create_parking_lot = async (howManyLots) => {
    try {
        lotSize = parseInt(howManyLots);
    } catch (e) {
        return "Error! Invalid parameter!";
    }

    for (let i = 1; i <= lotSize; i++) {
        parkingSlots.push(i);
    }
    return `Created parking lot with ${lotSize} slots`;
}

export const commandParser = async (input) => {
    input = input.split(" ");

    switch (input[0]) {
        case ('create_parking_lot'):

            try {
                const result = await create_parking_lot(input[1]);
                console.log(result);
            } catch (e) {
                console.log(`Error ${e}`);
            }
            break;
        default:
            console.log('Error in command input!');
    }
}