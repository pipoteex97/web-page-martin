import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

export const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                <h1 className='pricing__heading'>Precios</h1>
                <div className='pricing__container'>
                    <Link to='/sign-up' className='pricing__container-card'>
                    <div className='pricing__container-cardInfo'>
                        <div className='icon'>
                        <FaFire />
                        </div>
                        <h3>Starter</h3>
                        <h4>$1000</h4>
                        <p>Por mes</p>
                        <ul className='pricing__container-features'>
                        <li>100 Transacciones</li>
                        <li>2% Nose aca</li>
                        <li>$10,000 Limite</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'>
                        Elegir plan
                        </Button>
                    </div>
                    </Link>
                    <Link to='/sign-up' className='pricing__container-card'>
                    <div className='pricing__container-cardInfo'>
                        <div className='icon'>
                        <BsXDiamondFill />
                        </div>
                        <h3>Gold</h3>
                        <h4>$5000</h4>
                        <p>Por mes</p>
                        <ul className='pricing__container-features'>
                        <li>1000 Transacciones</li>
                        <li>Nose que poner aca</li>
                        <li>$100,000 Limites</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                        Elegir plan
                        </Button>
                    </div>
                    </Link>
                    <Link to='/sign-up' className='pricing__container-card'>
                    <div className='pricing__container-cardInfo'>
                        <div className='icon'>
                        <GiCrystalize />
                        </div>
                        <h3>Diamond</h3>
                        <h4>$10000</h4>
                        <p>Por mes</p>
                        <ul className='pricing__container-features'>
                        <li>Transacciones ilimitadas</li>
                        <li>Nose que poner aca</li>
                        <li>Y aca tampoco</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'>
                        Elegir plan
                        </Button>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
    </IconContext.Provider>
    )
}
