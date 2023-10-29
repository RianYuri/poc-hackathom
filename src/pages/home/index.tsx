import "./style.scss"
import headerIcon from "../../assets/img/brand-icon.png"
import homeBrandLogo from "../../assets/img/home-brand-logo.png"

export const Home = () =>{
    return(
        <>
        <section className="hero__section">
            <header className="hero__header">
                <img className="hero__header-icon" src={headerIcon} alt="Logo superior Adila" />
                <ul className="hero__header-links">
                    <li className="hero__header-link">
                        Sign up
                    </li>
                    <li className="hero__header-link">
                        Login
                    </li>
                </ul>
            </header>

            <section className="hero__section-texts">
                <img src={homeBrandLogo} alt="Logotipo Adila" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </section>
        </section>
        <section className="plans__section">
            <h2 className="plans__heading">Planos de assinatura</h2>

            <section className="plans__grid">
                <article className="plans__grid-item">
                    <h3 className="plans__grid-item-heading">Plano 1</h3>
                    <span className="plans__grid-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <span className="plans__grid-item-price">R$ 19,90 <sub>/Mês</sub></span>
                    <div className="plans__grid-item-selection"></div>
                </article>
                <article className="plans__grid-item">
                    <h3 className="plans__grid-item-heading">Plano 2</h3>
                    <span className="plans__grid-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <span className="plans__grid-item-price">R$ 19,90 <sub>/Mês</sub></span>
                </article>
                <article className="plans__grid-item">
                    <h3 className="plans__grid-item-heading">Plano 3</h3>
                    <span className="plans__grid-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <span className="plans__grid-item-price">R$ 19,90 <sub>/Mês</sub></span>
                </article>
            </section>
        </section>
        </>
    )
}