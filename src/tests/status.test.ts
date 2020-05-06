import { status } from "../parkingLotFunctions";

describe('status function tests', () => {

    it('should test uninitiated parking lot status', async () => {
        let expectedOutput = 'Error, no parking slots';
        let actualOutput = await status();
        expect(actualOutput).toEqual(expectedOutput);
    });
});