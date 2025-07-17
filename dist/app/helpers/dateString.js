"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSpecialDate(dates) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toLocaleDateString();
    if (dates.includes(todayStr)) {
        // console.log(todayStr)
        return todayStr;
    }
    const minDate = new Date(Math.min(...dates.map(dateStr => new Date(dateStr).getTime())));
    minDate.setDate(minDate.getDate() - 1);
    return minDate.toLocaleDateString();
}
exports.default = getSpecialDate;
