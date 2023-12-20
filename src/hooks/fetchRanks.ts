import axios from "axios"

export const fetchRocketLeague = (onSuccess, onError) => {
  axios.get(
    "https://render-api-deploy-hpfv.onrender.com/api/rocket-league"
  ).then(res => {
    onSuccess(res)
  }).catch((error) => {
    const err = error
    onError(err)
  })
}