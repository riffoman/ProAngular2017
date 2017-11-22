"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        var value = temp.toPrecision
            ? temp : parseFloat(temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    TempConverter.convertFtoC_version2 = function (temp) {
        var value;
        if (temp.toPrecision) {
            value = temp;
        }
        else if (temp.indexOf) {
            value = parseFloat(temp);
        }
        else {
            value = 0;
        }
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
