import { park, create_parking_lot } from "../parkingLotFunctions";

// beforeEach(async () => {
//     await create_parking_lot(6);
// });

describe('park function tests', () => {

    it('should throw error when text is passed for slots number instead of a number', async () => {
        let expectedOutput = 'Error, please initate parking lot';
        let actualOutput = await park('abc');
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should allocate one slot to the car', async () => {
        let expectedOutput = 'Allocated slot number: 1';
        await create_parking_lot(2);
        let actualOutput = await park('KA-01-HH-1234');
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should throw error when text is passed for slots number instead of a number', async () => {
        let expectedOutput = 'Allocated slot number: 2';
        let actualOutput = await park('abc');
        expect(actualOutput).toEqual(expectedOutput);
    });

    
    it('should throw error when text is passed for slots number instead of a number', async () => {
        let expectedOutput = 'No space for more vehicles';
        let actualOutput = await park(123);
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should throw error when null is passed for vehicle registration number', async () => {
        let expectedOutput = 'Error, vehicle registration number is needed';
        let actualOutput = await park(null);
        expect(actualOutput).toEqual(expectedOutput);
    });
});

