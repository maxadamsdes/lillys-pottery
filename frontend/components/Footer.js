import NextImage from "./Image"

const Footer = () => {
  return (
    <div className="flex justify-between m-6 bg-yellow-500" style={{padding: 25 + 'px', margin: 0 + 'px'}}>
      <p className="text-xs font-semibold text-gray-600">
      ©2021 Lilly's Pottery
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://www.instagram.com/lillyartmos/" className="max-w-xs ml-4">
          <NextImage src="/instagram.png" width={20} height={20} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/lillyjoy.amos" className="ml-3">
          <NextImage
            src="/facebook.png"
            width={20}
            height={20}
            alt="Facebook"
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
