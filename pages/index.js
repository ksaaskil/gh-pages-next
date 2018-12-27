import Link from 'next/link'
export default () => (
  <div>
    My static Next.js site!{' '}
    <Link href='/about' as={process.env.BACKEND_URL + '/about'}>
      <a>About</a>
    </Link>
  </div>
)
