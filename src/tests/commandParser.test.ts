import { commandParser } from "../parkingLotFunctions";

describe('commandParser function tests', () => {

    it('should test create_parking_lot with commandParser', async () => {
        let expectedOutput = 'Created parking lot with 1 slots';
        let actualOutput = await commandParser('create_parking_lot 1');
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should test park with commandParser', async () => {
        let expectedOutput = 'Allocated slot number: 1';
        let actualOutput = await commandParser('park KA-01-HH-1234');
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should test status with commandParser', async () => {
        let expectedOutput = 'KA-01-HH-1234';
        let actualOutput = await commandParser('status');
        expect(actualOutput).toContain(expectedOutput);
    });

    it('should test leave with commandParser', async () => {
        let expectedOutput = 'Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30';
        let actualOutput = await commandParser('leave KA-01-HH-1234 4');
        expect(actualOutput).toEqual(expectedOutput);
    });
});