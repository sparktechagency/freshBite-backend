function getSpecialDate(dates: string[]): string {
    
  const todayDate = new Date().toISOString()
  const separateDate = todayDate.split('T')[0]
  
  if (dates.includes(separateDate)) {
    return separateDate;
  }

  const minDate = new Date(
    Math.min(...dates.map(dateStr => new Date(dateStr).getTime()))
  );
  minDate.setDate(minDate.getDate() - 1);


  
  return minDate.toISOString().split('T')[0];
}


export default getSpecialDate

