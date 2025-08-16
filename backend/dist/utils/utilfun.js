export const getDayDifferenceFromDate = (date) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const today = new Date();
    const diffInTime = today.getTime() - date.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
};
//# sourceMappingURL=utilfun.js.map