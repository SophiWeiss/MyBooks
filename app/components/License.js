import style from '@/css/License.module.css'
import Image from 'next/image'

export default function License() {
  return (
    <div className={style.license}>
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        className={style.licenseImage}
      >
        <Image fill alt="Creative Commons License" src="/by-nc-nd.svg" />
      </a>
      <small className={style.licenceText}>
        This work is licensed under a
        <br />
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International License.
        </a>
      </small>
    </div>
  )
}
