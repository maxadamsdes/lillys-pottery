import { getCategories } from "../utils/api"
import CategoryButtons from "../components/CategoryButtons"
const Home = ({ categories, children }) =>  {
    return <div>
        <h1>Hi</h1>Hi
                <CategoryButtons categories={categories} />
            <div className="flex-grow">{children}</div>
    </div>
  }

  Home.getInitialProps = async () => {
    // Fetch global site settings from Strapi
    const categories = await getCategories()
    // Pass the data to our page via props
    return { pageProps: { categories } }
  }

  export default Home
