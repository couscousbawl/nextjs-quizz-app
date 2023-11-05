import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1>Quizz App</h1>
        <Link href='/quizz'>
          <button>
            Start Quiz
          </button>
        </Link>
      </div>
    </main>
  )
}
