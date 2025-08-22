export const formatDateToMonthYear = (date?: Date) : string => {
    if (!date)
        return "";
     
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getUTCFullYear().toString();

    return `${month.substring(0, 1).toUpperCase()}${month.substring(1, 3)}, ${year}`;
}

export const getExperienceMounths = (startDate: Date, endDate?: Date): number => {

    endDate = endDate ? endDate : new Date();

    let periodmMonths = ((endDate.getFullYear() - startDate.getUTCFullYear()) * 12) + 1;
    periodmMonths -= startDate.getMonth();
    periodmMonths += endDate.getMonth();

    return periodmMonths;
}

export const getExperiencePeriod = (startDate: Date, endDate?: Date): string => {

    let response: string = "";
    endDate = endDate ? endDate : new Date();

    let periodmMonths = ((endDate.getFullYear() - startDate.getUTCFullYear()) * 12) + 1;
    periodmMonths -= startDate.getMonth();
    periodmMonths += endDate.getMonth();
    if(periodmMonths > 12)
        response = `${parseInt((periodmMonths/12).toString())} ano(s) e `;

    response = periodmMonths % 12 !== 0 ? `${response} ${periodmMonths - parseInt((periodmMonths/12).toString()) * 12} meses` : response.substring(0, response.length - 3);
    return response;
}