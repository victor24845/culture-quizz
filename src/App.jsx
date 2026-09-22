import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <div className="logo">🧠</div>

        <h1>Culture Quiz</h1>

        <p>
          Teste tes connaissances et découvre
          <br />
          jusqu'où va ta culture générale !
        </p>

        <Link to="/categories" className="start-button">
          Commencer
        </Link>
      </div>
    </main>
  )
}

function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/categories')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur API catégories')
        }

        return response.json()
      })
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erreur catégories :', error)
        setLoading(false)
      })
  }, [])

  return (
    <main className="home">
      <div className="home-content">
        <h1>Choisis une catégorie</h1>

        {loading && <p>Chargement des catégories...</p>}

        {!loading && categories.length === 0 && (
          <p>Impossible de charger les catégories.</p>
        )}

        {!loading && categories.length > 0 && (
          <div className="categories">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/quiz?category=${category.id}`}
                className="category-button"
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

function Quiz() {
  const [searchParams] = useSearchParams()
  const categoryId = searchParams.get('category')

  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [displayedAnswers, setDisplayedAnswers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!categoryId) {
      return
    }

    setLoading(true)
    setQuestions([])
    setCurrentQuestion(0)
    setScore(0)
    setFinished(false)

    fetch(`http://127.0.0.1:3000/api/questions?category=${categoryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur API questions')
        }

        return response.json()
      })
      .then((data) => {
        setQuestions(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erreur questions :', error)
        setLoading(false)
      })
  }, [categoryId])

  useEffect(() => {
    if (questions.length === 0 || finished) {
      return
    }

    const question = questions[currentQuestion]

    if (!question) {
      return
    }

    const wrongAnswers = question.answers.filter(
      (answer) => answer !== question.correctAnswer
    )

    const shuffledWrongAnswers = [...wrongAnswers].sort(
      () => Math.random() - 0.5
    )

    const selectedWrongAnswers = shuffledWrongAnswers.slice(0, 3)

    const fourAnswers = [
      question.correctAnswer,
      ...selectedWrongAnswers
    ].sort(() => Math.random() - 0.5)

    setDisplayedAnswers(fourAnswers)
    setSelectedAnswer(null)
    setTimeLeft(30)
  }, [questions, currentQuestion, finished])

  useEffect(() => {
    if (
      questions.length === 0 ||
      finished ||
      selectedAnswer !== null
    ) {
      return
    }

    if (timeLeft <= 0) {
      nextQuestion()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft((previousTime) => previousTime - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, questions, finished, selectedAnswer])

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1)
    } else {
      setFinished(true)
    }
  }

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) {
      return
    }

    setSelectedAnswer(answer)

    const question = questions[currentQuestion]

    if (answer === question.correctAnswer) {
      setScore((previousScore) => previousScore + 1)
    }

    setTimeout(() => {
      nextQuestion()
    }, 1000)
  }

  if (loading) {
    return (
      <main className="home">
        <div className="home-content">
          <h1>Chargement...</h1>
        </div>
      </main>
    )
  }

  if (!categoryId) {
    return (
      <main className="home">
        <div className="home-content">
          <h1>Catégorie introuvable</h1>

          <Link to="/categories" className="start-button">
            Retour aux catégories
          </Link>
        </div>
      </main>
    )
  }

  if (questions.length === 0) {
    return (
      <main className="home">
        <div className="home-content">
          <h1>Aucune question</h1>

          <Link to="/categories" className="start-button">
            Retour aux catégories
          </Link>
        </div>
      </main>
    )
  }

  if (finished) {
    return (
      <main className="home">
        <div className="home-content">
          <div className="logo">🎉</div>

          <h1>Quiz terminé !</h1>

          <p>
            Ton score :{' '}
            <strong>
              {score} / {questions.length}
            </strong>
          </p>

          <Link to="/categories" className="start-button">
            Recommencer
          </Link>
        </div>
      </main>
    )
  }

  const question = questions[currentQuestion]

  return (
    <main className="home">
      <div className="home-content">
        <p>
          Question {currentQuestion + 1} / {questions.length}
        </p>

        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
        >
          ⏱️ {timeLeft}s
        </div>

        <h1>Quiz</h1>

        <h2>{question.question}</h2>

        <div className="categories">
          {displayedAnswers.map((answer) => {
            let className = ''

            if (selectedAnswer !== null) {
              if (answer === question.correctAnswer) {
                className = 'correct'
              } else if (answer === selectedAnswer) {
                className = 'wrong'
              }
            }

            return (
              <button
                key={answer}
                className={className}
                onClick={() => handleAnswer(answer)}
                disabled={selectedAnswer !== null}
              >
                {answer}
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App