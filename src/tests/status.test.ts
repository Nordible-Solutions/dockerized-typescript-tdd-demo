import { status, park, create_parking_lot } from "../parkingLotFunctions";

describe('status function tests', () => {

    it('should test uninitiated parking lot status', async () => {
        let expectedOutput = 'Error, no parking slots';
        let actualOutput = await status();
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('should test initiated parking lot status', async () => {
        let expectedOutput = [`Slot No. Registration No.`, `abc`, `123`];
        await create_parking_lot(1);
        await park('abc');
        let actualOutput = await status();
        expect(actualOutput).toContain(expectedOutput[0]);
    });

});