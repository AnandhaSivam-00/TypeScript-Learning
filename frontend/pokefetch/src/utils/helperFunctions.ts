export const getCurrentTimePeriod = (): string => {
  const currentHour: number = new Date().getHours();
  return currentHour < 12 ? "morning" 
    : currentHour < 18 ? "afternoon" 
    : currentHour < 21 ? "evening"
    : "night"
}