
import iconFullName from "../../assets/img/iconFullName.svg"
import "./style.scss"

export const Analise = () => {
    return (
        <section className="analise__section">
            <header className="analise__header">
                <img className="analise__header-icon" src={iconFullName} alt="Logo superior Adila" />
                <div className="analise__header-user">
                    <div className="analise__header-icon-user" />
                    <div className="analise__header-option-main">
                        <div className="analise__header-option"></div>
                        <div className="analise__header-option"></div>
                        <div className="analise__header-option"></div>
                    </div>

                </div>
            </header>
        </section>
    );
}