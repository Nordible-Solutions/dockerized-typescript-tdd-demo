interface vehiclesToParkType {
    slot: number,
    vehicleNumber: string
}

let vehiclesToPark: vehiclesToParkType[] = [];
let availableParkingSlots: number[] = [];
let lotSize = 0;

/**
 * create_parking_lot command
 * @param howManyLots no. of slots in the parking
 */
export const create_parking_lot = async (howManyLots: any) => {
    lotSize = howManyLots;
    if (!lotSize || isNaN(lotSize)) {
        return "Error! Invalid parameter!";
    }

    for (let i = 1; i <= lotSize; i++) {
        availableParkingSlots.push(i);
    }
    return `Created parking lot with ${lotSize} slots`;
}

export const status = async () => {
    if (!vehiclesToPark.length) {
        return `Error, no parking slots`;
    } else {
        vehiclesToPark = vehiclesToPark.sort((a, b) => {
            return a.slot - b.slot
        });

        let status = `Slot No. Registration No.`;
        for (let i = 0; i < vehiclesToPark.length; i++) {
            status += `\n${vehiclesToPark[i].slot}        ${vehiclesToPark[i].vehicleNumber} `;
        }

        return status;
    }
}

export const leave = async (vehicleNumber: string, parkingTime: number) => {

    let vehicleToLeave
    vehiclesToPark = vehiclesToPark.filter((vehicle) => {

        if (vehicle.vehicleNumber === vehicleNumber) vehicleToLeave = vehicle;

        return vehicle.vehicleNumber !== vehicleNumber;
    });

    if (vehicleToLeave) {
        availableParkingSlots.push(vehicleToLeave.slot); //mark slot as available
        return `Registration number ${vehicleNumber} with Slot Number ${vehicleToLeave.slot} is free with Charge ${calculateParkingCharges(parkingTime)}`;
    } else {
        return `Registration number ${vehicleNumber} not found`;
    }
}

export const calculateParkingCharges = (parkingTime: number) => {
    if (parkingTime === 2) {
        return 10;
    } else {
        return ((parkingTime - 2) * 10) + 10
    }
}

export const park = async (vehicleNumber: any) => {
    if (!vehicleNumber) {
        return `Error, vehicle registration number is needed`;
    } else if (lotSize === 0) {
        return `Error, please initate parking lot`;
    } else if (lotSize === vehiclesToPark.length) {
        return `Sorry, parking lot is full`;
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

export const commandParser = async (input: string) => {
    try {

        let inputSplit = input.split(" ");
        let result;

        switch (inputSplit[0]) {
            case ('leave'):
                result = await leave(inputSplit[1], parseInt(inputSplit[2]));
                break;
            case ('create_parking_lot'):

                result = await create_parking_lot(parseInt(inputSplit[1]));
                break;
            case ('status'):

                result = await status();
                break;
            case ('park'):
                result = await park(inputSplit[1].trim());
                break;
            default:
                result = 'Error in command input!';
        }

        return result;

    } catch (e) {
        return `Error ${e}`;
    }
}