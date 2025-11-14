'use server'

export const getCurrentTimePeriod = (): string => {
  const currentHour: number = new Date().getHours();

  if(currentHour < 12) {
    return "morning";
  }
  else if(currentHour < 18) {
    return "afternoon";
  }
  else if(currentHour < 21) {
    return "evening";
  }
  else {
    return "night";
  }
}

export const changeFirstLetterToUpperCase = (str: string | undefined): string => {
  if(str === undefined) {
    return 'N/A'
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const removeHypens = (str: string | undefined): string => {
  if(str === undefined) {
    return 'N/A'
  }
  
  return str.replaceAll("-", " ");
}

export const getRandomNumber = (maxNum: number): number => {
  return Math.floor(Math.random() * (maxNum + 1));
}

export const getRoundedValue = (value: number): number => {
  return Math.round((value / 170) * 100);
}