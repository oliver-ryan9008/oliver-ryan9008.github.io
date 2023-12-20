import React from "react"

// 1. Header Components
import Hero from "./components/header/Hero/Hero"

// 2. Content Components
import Skillz from "./components/content/Skillz/Skillz"
import Achievement from "./components/content/Achievement/Achievement"
// import Projects from "./components/content/Projects/Projects"

// 3. Footer Component
import AboutMe from "./components/footer/AboutMe/AboutMe"

// 4. Utility Components
import Spinner from "./components/utility/Spinner/Spinner"
import { name } from "./your_info"
import ScrollToTopButton from "./components/utility/ScrollToTopButton/ScrollToTopButton"
// import RocketLeague from "./components/content/RocketLeague/RocketLeague"
import { fetchRocketLeague } from "./hooks/fetchRanks"

function App() {
  const [loading, setLoading] = React.useState(true)

  const [data, setData] = React.useState()
  const [error, setError] = React.useState(null)

  const onError = (err?: any) => {
    setError(err)
  }

  const onSuccess = (res?: any) => {
    setData(res)
  }

  React.useEffect(() => {
    if (!loading) return

    fetchRocketLeague(onSuccess, onError)
  }, [loading])

  React.useEffect(() => {
    if (error) {
      alert(error)
    }

    if (data) {
      console.log(data)
    }
  }, [data, error])

  React.useEffect(() => {
    document.title = `${name.firstname} ${name.lastname}`
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Hero />
          <Skillz />
          <ScrollToTopButton />
          <Achievement />
          {/* <Projects /> */}
          <AboutMe />
          {/* <RocketLeague /> */}
        </>
      )}
    </>
  )
}

export default App
