import React, {Component} from 'react';
import "../App.css"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class StartPage extends Component {
    render() {
        return (
            <div style={homePageStyles}>
                <center>
                    <h1 style={headerTextStyle}>Гостиница "Былинный Город"</h1>
                </center>
                <div style={belozerskStyle}>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <h4>Белозерск - город с многовековой историей.
                                    Он является одним из самых древних городов нашей страны.</h4>
                                <h4>Сочетая красивейшую природу, уникальную архитектуру и богатое культурное наследие,
                                    город привлекает большое количество турисов.</h4>
                            </td>
                            <td>
                                <img className="scale"
                                     src="http://localhost:3000/images/Bel_Mon.jpg"  alt="Фото Белозерска"
                                />
                            </td>
                            <td>
                                <img className="scale" src="http://localhost:3000/images/Belozersk_kanal.jpg"  alt="Фото Белозерска"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={infoStyle}>

                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <img className="scale"
                                     src="http://localhost:3000/images/Tipo_Hotel.png"  alt="Фото Белозерска"
                                />
                            </td>

                            <td>
                                <h4>
                                    Гостиница расположена в центральной части города, что позволяет с легкостью добираться до местных достопримечательностей.
                                </h4>
                                <h4>
                                    Для Вашего удобства в гостинице "Былинный город" имеются высокоскоростной доступ в Интернет, цифровое телевидение (20 каналов),
                                    кафе-ресторан, а так же спорт-зал.
                                </h4>
                                <h4>
                                    Зона вокруг гостиницы оборудована местами для отдыха, детской площадкой и автомобильной парковкой.
                                </h4>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div style={belozerskStyle}>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <h4>На первом этаже работает кафе "Вкусный дворик"</h4>
                                <h4>
                                    Кафе "Вкусный дворик" - накормим вкусно! <br/>
                                    - График работы:<br/>
                                    Вс. - Чт. с 8:00 - 21:00,<br/>
                                    Пт. - Сб. с 8:00 - 23:00, без выходных<br/>
                                    - Вместительность: 35 человек<br/>
                                    - Проведение конференций<br/>
                                    - Проведение корпоративов, банкетов, свадеб<br/>
                                    г. Белозерск, ул. Карла Маркса, д. 28, апарт-отель "Былинный Город"<br/>
                                    Телефон: , +7 (921) 061-18-72<br/>
                                </h4>
                            </td>
                            <td>
                                <img className="scaleCafe" src="http://localhost:3000/images/Cafe.jpg"  alt="Фото Белозерска"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div style={contactsStyle}>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <h2 style={mapTextStyle} >Контакты</h2>
                                <div >
                                    <h4 style={inlineBlock}>По всем вопросам обращаться по телефону: +7 (963) 355-87-21</h4>
                                    <h4 style={inlineBlock}>Адресс: Вологодская область, город Белозерск, улица Карла Маркса, дом 28.</h4>
                                    <br/>
                                    <h4>
                                        GPS-координаты:
                                        Широта: 60.02963
                                        Долгота: 37.801957 <br/>
                                    </h4>
                                    <h4>
                                        У вас нет времени на телефонные звонки? <br/>
                                        Хотите заказать номер максимально быстро и с уверенностью в том, что он точно <br/>
                                        будет готов для Вас в назначенное время? Воспользуйтесь формой онлайн-бронирования <br/>
                                        и получайте самые актуальные цены!
                                    </h4>
                                    <center>
                                        <Link to="/home">
                                            <Button
                                                style={linkButtonStyle}
                                                variant="outline-info"
                                            >Перейти к онлайн бронированию!</Button>
                                        </Link>
                                    </center>
                                </div>
                            </td>

                            <td>
                                <h2 style={mapTextStyle} >Наше местоположение</h2>
                                <iframe
                                    title="map"
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A498b954d1f765456df5cd2cae29b286279ddc75ba43488106c0e69df0b6b6e76&amp;source=constructor"
                                    width="600" height="400" frameBorder="0"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}


const homePageStyles = {
    height: "auto",
    backgroundImage: `url(http://localhost:3000/images/background_image_Bel.jpg)`,
    backgroundPosition: "left bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    margin: "0 auto",
    border: "0.1px solid black",
}

const inlineBlock = {
    display: "inline-block",
}

// const placeStyle = {
//     width: "25%",
//     backgroundColor: "white",
//     opacity: "95%",
//     margin: "0 5%",
//
// }

const belozerskStyle = {
    width: "90%",
    backgroundColor: "white",
    opacity: "95%",
    margin: "0 5%",
}

const infoStyle = {
    width: "80%",
    backgroundColor: "white",
    opacity: "95%",
    margin: "50px 50px",
    marginLeft: "auto",
    marginRight: "10px",
}

const contactsStyle = {
    width: "90%",
    backgroundColor: "white",
    //opacity: "95%",
    margin: "0 5%",
}

const mapTextStyle = {
    textAlign: "center",
}



const headerTextStyle = {
    color: "#fff",
}

const linkButtonStyle = {
    margin: "20px 5px",
    height: "100px",
    width: "500px",
}

export default StartPage;