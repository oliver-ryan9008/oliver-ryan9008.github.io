import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL

export const fetchRocketLeague = async () => {
  console.log(`getting ${API_URL}/rocketleague/rank`)
  return await axios
    .get(`${API_URL}/rocketleague/rank`)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error
    })
}
