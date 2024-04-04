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
import RocketLeague from "./components/content/RocketLeague/RocketLeague"
import Loading from "./components/loading/Loading"
// import { fetchRocketLeague } from "./hooks/fetchRanks"

function App() {
  const [loading, setLoading] = React.useState(true)
  // const [ranksLoading, setRanksLoading] = React.useState(false)

  React.useEffect(() => {
    document.title = `${name.firstname} ${name.lastname}`
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  // if (!loading) {
  //   return <Loading />
  // }

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
          <RocketLeague />
        </>
      )}
    </>
  )
}

export default App
