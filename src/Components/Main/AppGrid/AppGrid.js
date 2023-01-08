import {  FaSuitcase, FaCashRegister  } from 'react-icons/fa';
import {  AiTwotoneShop  } from 'react-icons/ai';
import {  GiPartyFlags  } from 'react-icons/gi';
import "./appgrid.css";
import { IconContext } from 'react-icons';
import { useContext } from 'react';

const AppGrid = () => {

useContext(IconContext)

    return ( 
        <IconContext.Provider value={{ className: "shared-class", size: 130 }}>
        <div className="AppGrid__container">

            <div className="AppGrid__app1">
                <div className='App__container'>
                    <AiTwotoneShop />
                    <h3>Productos</h3>
                </div>
            </div>

            <div className="AppGrid__app2">
                <div className='App__container'>
                    <GiPartyFlags />
                    <h3>Eventos & Ventas Corporativas</h3>
                </div>
            </div>

            <div className="AppGrid__app3">
                <div className='App__container'>
                    <FaSuitcase />
                    <h3>Distribuidores</h3>
                </div>
            </div>

            <div className="AppGrid__app4">
                <div className='App__container'>
                    <FaCashRegister />
                    <h3>Incorporar a su Comercio</h3>
                </div>
            </div>

        </div>
        </IconContext.Provider>
     );
}
 
export default AppGrid;