import React from "react";
import Navbar from "./navbar";
import "./App.css"
import Placeholder from "./placeholder";
import Footer from "./footer";
export default class App extends React.Component {
    render(): JSX.Element {
        return (
            <section className="main-section">
                <Navbar/>
                <Placeholder/>
                <Footer/>
            </section>
        )
    }
}