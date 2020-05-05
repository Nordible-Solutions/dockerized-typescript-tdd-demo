import { create_parking_lot } from "../parkingLotFunctions";

describe('create_parking_lot tests', () => {
    it('should create 6 parking slots', async () => {
        let expectedOutput = 'Created parking lot with 6 slots';
        let actualOutput = await create_parking_lot(6);
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should throw error when a valid number for slots is not passed', async () => {
        let expectedOutput = 'Error! Invalid parameter!';
        let actualOutput = await create_parking_lot('abc');
        expect(actualOutput).toEqual(expectedOutput);
    });
});

