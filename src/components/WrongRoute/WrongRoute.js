import { Link } from "react-router-dom";

function WrongRoute() {
    return (
        <section className='wrong-route'>
            <p className='wrong-route__error-code'>
                404
            </p>
            <p className='wrong-route__error-text'>
                Страница не найдена
            </p>
            <Link className='wrong-route__link' to='/'>
                Назад
            </Link>
        </section>
    )
}

export default WrongRoute;