import './style.scss'
import homeBrandLogo from '../../assets/img/home-brand-logo.png'

const Footer = () => {
  return (
    <footer className='footer__section'>
        <div className="footer__container">
        <img src={homeBrandLogo} alt="Logo Adila" />
        <span>By Yê, 2023</span>
        </div>
    </footer>
  )
}

export default Footer