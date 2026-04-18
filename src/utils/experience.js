export const getYearsExperience = () => {
  const start = new Date("2023-12-01")
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25
  return Math.floor((Date.now() - start.getTime()) / msPerYear)
}