import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/nav-bar'

import './index.scss'
import Register from './pages/register'

import { QueryClient, QueryClientProvider } from 'react-query'
import { trpc } from './utils/trpc'

const Client = new QueryClient()
const App = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:8080/trpc',

      // optional
      headers() {
        return {
          authorization: 'cookie-auth-token', //getAuthCookie()
        }
      },
    }),
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

const AppContent = () => {
  const { data, error, isLoading } = trpc.useQuery(['status'])

  console.log(data, error, isLoading)
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 centermax-w-6xl py-12">
        <h1 className="text-7xl dark:text-white flex">
          Messenger
          {data && (
            <span
              className={`badge badge-${
                (data && 'success') || (error && 'danger') || (isLoading && 'warning')
              }`}
            >
              {(data && 'Connected') || (error && 'Error') || (isLoading && 'Loading')}
            </span>
          )}
        </h1>
        <article className="prose">
          <p>Messenger application like WhatsApp using React and jPRC.</p>
        </article>
        <div className="divider" />
        <Register />
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
