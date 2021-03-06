import 'tailwindcss/tailwind.css'

// Use the <Provider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App ({ Component, pageProps }) {


  return (
    <Component {...pageProps} />
  )
}