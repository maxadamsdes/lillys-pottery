import Link from "next/link"
import NextImage from "./Image"

const Navbar = () => {
  return (
    <div className="container row bg-gray-900 text-white align-items-center sticky-top" style={{padding: 20 + 'px', opacity: 0.8}}>
      <div className="col-3 d-flex justify-content-center">
        <Link href="/">
          <a className="text-3xl font-bold leading-normal mt-0 mb-2">Lilly's Pottery</a>
        </Link>
      </div>
      <div className="col-6 d-flex justify-content-end space-x-24">

        <Link href="/">
          <a className="text-1xl font-bold leading-normal mt-0 mb-2">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-1xl font-bold leading-normal mt-0 mb-2">About</a>
        </Link>
      </div>
      <div className="col-3 d-flex justify-content-center">
        <button className="snipcart-checkout flex items-center">
          <NextImage height="30" width="30" src="/cart.png" alt="Cart" />
          <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
