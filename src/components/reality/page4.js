import React, {Component} from 'react';
import './xmas.css';
import {RemoteButton} from "./index";
import "../game/posts.css";
import "../index.css";
import PopUp from "../game/PopUp";
import Password from "../game/password";
import Continue from "../game/continueButton";
import KevinPopUp from "./KevinPopUp";




export default class Page4 extends Component {

    componentDidMount() {
        document.title = "Sofa"
        if (this.props.curr_stage != 4) {
            this.props.stage(4)
        }
        localStorage.setItem("remote", "5");
        setTimeout(() => this.setState({sofa: true}), 5000);
    }

    state = {
        sofa: false,
        note_open: false,
        texted: false,
        text: "https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/textMe.jpg?raw=true"
    };


    notePop = () => {
        this.setState({
            note_open: !this.state.note_open
        });
    };

    KevinPop = () => {
        this.setState({
            note_open: !this.state.note_open,
            texted: !this.state.texted
        });
    };



    render() {
        return(
            <div>
                {this.state.sofa ?
                <body align={"center"}>
                <RemoteButton/>
                {this.state.note_open ? <PopUp title="Text Me" x="679" y="251" width="100%" image={this.state.text} bottom={<Password alert={"Incorrect Code"} command={"Enter Code"} input={"xxx-xxx-xxxx"} correct={<Continue url={"/reality/givtime"} text={"Continue"}/>} answers={["802-881-7590", "8028817590"]}/>} padding="42%" toggle={this.notePop} /> : null}
                {this.state.texted ? <KevinPopUp toggle={this.KevinPop} /> : null}
                <div className="scaling-svg-container" style={{paddingBottom: "45%"}}>
                    <svg className="scaling-svg" viewBox="0 0 1866 800"> {/* Needs auto
                         updating*/}
                        <image width="100%" href="https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/livingRoom.png?raw=true"/>
                        <rect x="870" y="645" width="50" height="25" className="clickable-done" onClick={this.notePop}/>
                    </svg>
                </div>
                <p>You've been ejected from the television...</p>
                </body> :
                    <div align="center" height="100%" style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/escovid2/main/images/reality/old_tv.png")', paddingBottom: "10px"}}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1 style={{backgroundColor: "white"}}>Rebooting ...</h1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>}
            </div>
        );
    }
}

