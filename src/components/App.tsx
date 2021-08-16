import React from "react";
import Navbar from "./navbar";
import "./App.css"
import Placeholder from "./placeholder";
import Footer from "./footer";
export default class App extends React.Component {
    render(): JSX.Element {
        const style = {height:'100vh', width: '100vw'}
        return (
            <div style={style}>
                <Navbar/>
                <Placeholder/>
                <Footer/>
            </div>
        )
    }
}