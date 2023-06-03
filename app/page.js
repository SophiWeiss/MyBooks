import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1 align={'center'}>My Books</h1>
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        <Image
          priority
          alt="Creative Commons License"
          style="border-width:0"
          src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
          width={88}
          height={31}
        />
      </a>
      <br />
      This work is licensed under a{' '}
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
        International License.
      </a>
    </main>
  )
}
