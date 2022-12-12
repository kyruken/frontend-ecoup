
export default function Header() {
    return (
        <div className='width100'>
            <div className='header-container container padding-tb-2 padding-lr-2 margin-top-2'>
                <div className="flex-column">
                    <h3>Welcome to Eco Up</h3>
                    <h2>Let's get</h2>
                    <h1>Sustainable</h1>
                    <p>Engage in ecological activities to support the sustainability of our planet.</p>
                    <button>Start now</button>
                </div>
                <div>
                    <img src='../src/assets/ecoupplant.png' className="header-img"></img>
                </div>
            </div>
        </div>
    )
}