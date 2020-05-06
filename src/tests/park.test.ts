import { park, create_parking_lot } from "../parkingLotFunctions";

describe('park function tests', () => {

    it('should test uninitiated parking lot condition', async () => {
        let expectedOutput = 'Error, please initate parking lot';
        let actualOutput = await park('abc');
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should allocate one slot to the vehicle', async () => {
        let expectedOutput = 'Allocated slot number: 1';
        await create_parking_lot(2);
        let actualOutput = await park('KA-01-HH-1234');
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should allocate second slot to the vehicle', async () => {
        let expectedOutput = 'Allocated slot number: 2';
        let actualOutput = await park('abc');
        expect(actualOutput).toEqual(expectedOutput);
    });
    
    it('should test threshold of the parking lot', async () => {
        let expectedOutput = 'Sorry, parking lot is full';
        let actualOutput = await park(123);
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should test invalid parameters to the parking function', async () => {
        let expectedOutput = 'Error, vehicle registration number is needed';
        let actualOutput = await park(null);
        expect(actualOutput).toEqual(expectedOutput);
    });
});

