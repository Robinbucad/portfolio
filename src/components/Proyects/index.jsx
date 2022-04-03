import './style.scss'
import Sidebar from "../Sidebar"
import ZoomCord from '../../assets/images/zoomcord.PNG'
import AirBnb from '../../assets/images/airbnb.PNG'
import Kanban from '../../assets/images/kanban.PNG'
import Cocktails from '../../assets/images/cocktails.PNG'
import Tetris from '../../assets/images/tetris.PNG'
import Rick from '../../assets/images/rick.PNG'
import Html from '../../assets/images/html.PNG'
import Poke from '../../assets/images/poke.PNG'
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

                <a href='https://airbnbtemp.netlify.app/' target='_blank' rel='noreferrer' className={`${`item-zoom`} _6`}>
                    <img className="card-img" src={AirBnb} alt='ZoomCord'></img>
                </a>

                <a href='https://kanbanrobin.netlify.app/' target='_blank' rel='noreferrer' className={`${`item-zoom`} _10`}>
                    <img className="card-img" src={Kanban} alt='Kanban'></img>
                </a>

                <a href='https://cocktailapprobin.netlify.app/' target='_blank' rel='noreferrer' className={`${`item-zoom`} _14`}>
                    <img className="card-img" src={Cocktails} alt='Cocktails'></img>
                </a>

                <a href='https://tetrisrobin.netlify.app/' target='_blank' rel='noreferrer' className={`${`item-zoom`} _18`}>
                    <img className="card-img" src={Tetris} alt='Tetris'></img>
                </a>

                <a href='https://rickmortyrobin.netlify.app/' target='_blank' rel='noreferrer' className={`${`item-zoom`} _22`}>
                    <img className="card-img" src={Rick} alt='Rick y morty'></img>
                </a>

                <a href='https://htmlcssrobin.netlify.app/' target='_blank' rel='noreferrer' className={`${`item-zoom`} _26`}>
                    <img className="card-img" src={Html} alt='html y css'></img>
                </a>

                <a href='https://pokerobin.netlify.app/' target='_blank' rel='noreferrer' className={`${`item-zoom`} _30`}>
                    <img className="card-img" src={Poke} alt='Pokemon'></img>
                </a>

            </div>
        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default Proyects

