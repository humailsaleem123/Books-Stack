import errorStyles from '../styles/error.module.css';
import Link from 'next/link';
import { Spacer } from '@nextui-org/react';


export default function Custom404() {

  return (


    <div id={`${errorStyles['notfound']}`}>
      <div className={`${errorStyles['notfound']}`}>
        <div className={`${errorStyles['notfound-404']}`}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Spacer y={2} />
        <Link href='/'>Back To Homepage</Link>
      </div>
    </div>
  )



}