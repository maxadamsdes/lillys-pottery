import styles from './about.module.css'
import NextImage from '../components/Image'
function About() {
    return <div className="container" style={{padding: 0 + 'px'}}>
        <div className="row d-flex justify-content-center align-items-center bg-green-100" style={{padding: 25 + 'px', margin: 0 + 'px'}}>
            <div className="col-6">
                <div className="card bg-green-100 border-none" style={{left: 25 + '%', width: 50 + '%'}}>
                    <NextImage src="/lilly.jpg" width={300} height={300} className="rounded-circle" />
                </div>
            </div>
            <div className="col-6">
                <div className="card bg-green-100 border-none">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">About Me</h1>
                    <h2 className="text-2xl font-normal text-gray-900 sm:text-3xl sm:truncate">Lilly-Joy Amos</h2>
                    <h3 className="text-1xl font-bold leading-7 text-gray-900 sm:text-1xl sm:truncate">Potter</h3>
                    <p>Pottery has been a hobby of mine for 8 years now and I've decided to "go pro" and see how it goes!.</p>
                    <p>Hit me up for any commisions, queries or concerns!</p>
                    <p>Email: lillyartmos@gmail.com</p>
                    <p>Mobile: 021 344 5283</p>
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center bg-green-100" style={{padding: 25 + 'px', margin: 0 + 'px'}}>
            <div className="col-6">
                <div className="card bg-green-100 border-none">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Where I Work</h1>
                    <h2 className="text-2xl font-normal text-gray-900 sm:text-3xl sm:truncate">Macmillans Hand Thrown Ceramics</h2>
                    <p>92 Bateup Road, Stoke, Richmond 7020</p>
                    <p>Open: XXX - XXX</p>
                    <p>From: XXam - XXpm</p>
                    <p>Website: https://www.handthrown.studio/ </p>
                </div>
            </div>
            <div className="col-6">
                <div className="card bg-green-100 border-none" style={{left: 25 + '%', width: 50 + '%'}}>
                    <NextImage src="/macmillans.png" width={300} height={300} className="rounded" />
                </div>
            </div>
        </div>
    </div>
  }
  
  export default About