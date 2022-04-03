import './style.scss'
import Sidebar from "../Sidebar"
import ZoomCord from '../../assets/images/zoomcord.PNG'
import AirBnb from '../../assets/images/airbnb.PNG'
import Kanban from '../../assets/images/kanban.PNG'
import Loader from 'react-loaders'

function Proyects() {
  

    return (
        <>
        <div>
            <Sidebar></Sidebar>
            <div className='container-img'>
                <div  className={`${`item-zoom`} _2`}>
                    <img className="card-img" src={ZoomCord} alt='ZoomCord'></img>
                </div>

                <div  className={`${`item-zoom`} _6`}>
                    <img className="card-img" src={AirBnb} alt='ZoomCord'></img>
                </div>

                <div  className={`${`item-zoom`} _10`}>
                    <img className="card-img" src={Kanban} alt='ZoomCord'></img>
                </div>

            </div>
        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default Proyects

