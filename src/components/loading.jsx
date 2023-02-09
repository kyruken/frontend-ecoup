import loading from '../assets/loading.gif';
export default function Loading(props) {
    return (
        <div className='loading'>
            <div className='flex-column flex-center'>
                <h1>Eco<span>Up</span></h1>
                <img src={loading} alt='loading' width='40'/>
            </div>
        </div>
    )
}