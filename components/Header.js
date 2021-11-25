import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container bg-indigo-500 p-4 rounded text-white'>
        <Link href='/' passHref>
          <h2 className='cursor-pointer hover:text-gray-700'>Dev Blog</h2>
        </Link>
      </div>
    </header>
  )
}
