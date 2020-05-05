let vehiclesToPark = [];
let availableParkingSlots = [];
let lotSize = 0;

/**
 * create_parking_lot command
 * @param howManyLots no. of slots in the parking
 */
export const create_parking_lot = async (howManyLots) => {
    lotSize = parseInt(howManyLots);
    if (isNaN(lotSize)) {
        return "Error! Invalid parameter!";
    }

    for (let i = 1; i <= lotSize; i++) {
        availableParkingSlots.push(i);
    }
    return `Created parking lot with ${lotSize} slots`;
}

let park = async (vehicleNumber) => {
    if (lotSize === 0) {
        return `Error, please initate parking lot`;
    } else if (lotSize === vehiclesToPark.length) {
        return `No space for more vehicles`;
    } else {
        let parkingSlot = availableParkingSlots[0];
        vehiclesToPark.push({
            'slot': parkingSlot,
            'vehicleNumber': vehicleNumber
        });
        availableParkingSlots.shift(); //available parking slots are reduced
        return `Allocated slot number: ${parkingSlot}`
    }
}

export const commandParser = async (input) => {
    try {

        input = input.toLowerCase().split(" ");
        let result;

        switch (input[0]) {
            case ('create_parking_lot'):

                result = await create_parking_lot(input[1]);
                console.log(result);
                break;
            case ('park'):
                result = await park(input[1].trim());
                console.log(result);
                break;
            default:
                console.log('Error in command input!');
        }
    } catch (e) {
        console.log(`Error ${e}`);
    }
}