export class TempConverter {
    static convertFtoC(temp: number | string): string {
        let value: number = (<number>temp).toPrecision
            ? <number>temp : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }

    static convertFtoC_version2(temp: any): string {
        let value: number;
        if ((temp as number).toPrecision) {
            value = temp;
        } else if ((temp as string).indexOf) {
            value = parseFloat(<string>temp);
        } else {
            value = 0;
        }
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }
}