import "./App.css"
import StudentList from "./components/StudentList"
import MovieList from "./components/MovieList"
import Spinner from "./components/Spinner"
import { useState } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="App">
        {/* <StudentList /> */}
        <MovieList />
      </div>
    )
  }
}

export default App
