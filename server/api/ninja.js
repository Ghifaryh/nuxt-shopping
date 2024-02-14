export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event)

  // const { age } = await readBody(event)

  // private api use $fetch in server routes

  // if using ts is says Property 'data' does not exist on type 'unknown'.
  const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=")

  return data
})
