import React from "react";

const Layout = ({children}) => {
    return(<>
        <header>
            <div className="gornji">
                <div className="logo">
                    <h1>Đuture</h1>
                </div>
                <nav className="gornja-nav">
                    <ul className="info-links">
                        <li>O Đuture</li>
                        <li>Facebook link</li>
                        <li>Instagram link</li>
                    </ul>
                    <ul className="app-links">
                        <li>Početna</li>
                    </ul>
                </nav>
            </div>
            <div className="donja">
                <nav className="profil-nav">
                    <ul className="profil-links">
                        <li>Moj profil</li>
                        <li>Košarica</li>
                        <li>Prijava</li>
                        <li>Registracija</li>
                    </ul>
                </nav>
                <div className="pretraga">
                    <form className="pretraga-form">
                        <label htmlFor="pretraga" style={{display: "none"}}>Pretraži</label>
                        <input
                            type="search"
                            className="pretraga"
                            id="pretraga"/>
                        <button type="submit">Pretraži</button>
                    </form>
                </div>
            </div>
        </header>
        {children}
        <footer>
            <nav className="footer-nav">
                <ul>
                    <li>Kontakt</li>
                    <li>Uvjeti korištenja</li>
                    <li>Reklamacije</li>
                </ul>
                <p>Izradio Neon Ballroom</p>
            </nav>
        </footer>

    </>);
};

export default Layout;