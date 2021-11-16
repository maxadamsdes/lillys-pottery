import NextImage from "./Image"
import Link from "next/link"

const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className="container bg-blue-100">
      <br />
      <h1 className="text-3xl font-bold leading-normal mt-0 mb-2 text-center">Categories</h1> 
      <div className="row flex flex-wrap mx-auto gap-4 mt-8 justify-content-center">
        {categories.map((_category) => (
          <Link href={`/categories/${_category.slug}`} key={_category.id}>
            
            <div className="card col-3 bg-yellow-300" style={{padding: 0 + 'px'}}>
              <button style={{}}>
                  <NextImage media={_category.image} />
                <div className="card-img-overlay align-self-center bg-gray-100 rounded-circle justify-content-center d-flex align-items-center" style={{top: 25 + '%', left: 25 + '%', height: 50 + '%',width: 50 + '%', opacity: 80 + '%'}}>
                  <h2 className="text-2xl font-normal leading-normal mt-0 mb-2">{_category.name}</h2>              
                </div>
              </button>
            </div>
          </Link>
        ))}
      </div>
      <br />
    </div>
  )
}

export default CategoryButtons
