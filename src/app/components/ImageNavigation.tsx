import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'

const ImageNavigation = ({ prev, next }: { prev?: string; next?: string }) => {
  return (
    <nav>
      <ul>
        <li>prev: {prev}</li>
        <li>next: {next}</li>
      </ul>
    </nav>
  )
}

export default ImageNavigation
