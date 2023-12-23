import React from "react"
import { fetchRocketLeague } from "../../../hooks/fetchRanks"

const RocketLeague = ({ loading, setLoading }) => {
  const [data, setData] = React.useState<any>(undefined)
  const [error, setError] = React.useState<any>(undefined)
  // const [loading, setLoading] = React.useState(true)

  const handleLoad = async () => {
    await fetchRocketLeague()
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }

  React.useEffect(() => {
    if (loading || data || error) return

    setLoading(true)
    void handleLoad()
  }, [loading, data, error])

  if (error) {
    return <div>{error}</div>
  }

  if (loading || !data) {
    return null
  }

  return <div>{data?.rank}</div>
}

export default RocketLeague
