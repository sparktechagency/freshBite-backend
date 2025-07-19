"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSpecialDate(dates) {
    const todayDate = new Date().toISOString();
    const separateDate = todayDate.split('T')[0];
    if (dates.includes(separateDate)) {
        return separateDate;
    }
    const minDate = new Date(Math.min(...dates.map(dateStr => new Date(dateStr).getTime())));
    minDate.setDate(minDate.getDate() - 1);
    return minDate.toISOString().split('T')[0];
}
exports.default = getSpecialDate;
