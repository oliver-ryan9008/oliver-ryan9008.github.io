import React from "react"
import { fetchRocketLeague } from "../../../hooks/fetchRanks"
import "./RocketLeague.css"

const RocketLeague = () => {
  const [data, setData] = React.useState<any>(undefined)
  const [error, setError] = React.useState<any>(undefined)
  const [loading, setLoading] = React.useState(true)

  const handleLoad = async () => {
    setLoading(true)
    await fetchRocketLeague()
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  React.useEffect(() => {
    if (data || error) return

    void handleLoad()
  }, [loading, data, error])

  // React.useEffect(() => {
  //   setRanksLoading(loading)
  // }, [loading])

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return null
  }

  console.log(data)

  return (
    <div className="rank-box" dangerouslySetInnerHTML={{ __html: data }}></div>
  )
}

export default RocketLeague
