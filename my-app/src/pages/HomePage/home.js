import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import $ from 'jquery';

$(document).ready(function () {
    //$('.header').hide();
    $('.container').hide();
    
    $('.button-36').click(function () {
        var name = $('#input').val();
        if (name !== null && name !== "") {
            var playercard = $('<div class="playerCard"> <h2>' + name + '</h2 > <div class="playerCard_btn" id="playerCard_btn"><i class="fa fa-gear" id="settings"></i></div><div class="playerCard_btn" id="playerCard_btn" > <i class="fa fa-minus" id="remove"></i></div></div >');
            playercard.hide();
            $('#list').append(playercard);
            playercard.fadeIn(500);
            $('#input').val('');
        } else {
            alert("Error: Empty input")
        }
        //$('ul').append('<div class="playerCard"> <h2>' + $('#input').val() + '</h2 > <div class="playerCard_btn" style="color:grey;"><i class="fa fa-gear" id="settings" style="font-size:52px;"></i></div><div class="playerCard_btn" style="color:red;"> <i class="fa fa-minus" id="remove" style="font-size:52px;"></i></div></div >');
       
    });

    $('.button-37').click(function () {
       
        console.log("Game starting...")
        
    });

    $('.header').click(function (){
        $('.header').fadeOut(1000, function () {
            $('.container').fadeIn(1000);
        });
    });
    $(document).on("click", ".playerCard_btn", function (e) {
        if (e.target.id === "remove") {
            console.log("Removeing....");
            $('#list').find($(this).parent()).fadeOut(300, function () { $(this).remove(); });
            console.log("Remove success")
        }
        else if (e.target.id === "settings") {
            console.log("Settings...");
            let person = prompt("Please enter your name", "Harry Potter");
            let text;
            if (person === null || person === "") {
                text = "Error: Empty input";
            } else {
                text = "Settings success";
                $('#list').find($(this).parent()).find('h2').text(person);
            }
            console.log(text);
        }
        else {
            console.log("Error target:" + e.target.id);
        }

    });

});
export default class home extends React.Component {
    constructor(props) {
        super(props);
      }
          
      handleChange=(e)=>{
        this.setState({value:e.target.value})
      }
      
      submit=()=>{
        var players1 = this.state.players;
        players1.push(this.state.value)
        this.setState({players:players1})
        console.log(this.state.players)
      }
     
      render(){
        return (
    <span>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <header className="header">
            <h1 className="animate-charcter">Wanna play a game?</h1>
        </header>
        <div className="container">
            <ul className="cb-slideshow">
                <li><span>Image 01</span><div></div></li>
                <li><span>Image 02</span><div></div></li>
                <li><span>Image 03</span><div></div></li>
                <li><span>Image 04</span><div></div></li>
                <li><span>Image 05</span><div></div></li>
                <li><span>Image 06</span><div></div></li>
            </ul>

            <div id="content">
                <h1 className="add-player-title">Adding players</h1>
                <br />
                <label className="custom-field two">
                    <input id="input" placeholder="&nbsp;" />
                    <span className="placeholder">Enter name</span>
                </label>
                <button className="button-36">Add</button>
                <br />

                <ul id="list">

                    <div className="playerCard">
                        <h2>
                            Player name
                        </h2>
                        <div className="playerCard_btn" id="playerCard_btn">
                            <i className="fa fa-gear" id="settings" ></i>
                        </div>
                        <div className="playerCard_btn" id="playerCard_btn" >
                            <i className="fa fa-minus" id="remove" ></i>
                        </div>
                    </div>
                    <div className="playerCard">
                        <h2>
                            Player name 2
                        </h2>
                        <div className="playerCard_btn" id="playerCard_btn" >
                            <i className="fa fa-gear" id="settings" ></i>
                        </div>
                        <div className="playerCard_btn" id="playerCard_btn">
                            <i className="fa fa-minus" id="remove"></i>
                        </div>
                    </div>
                </ul>
                <footer>
                    <button type="button" className='button-37'>{}</button>
                    <Link to={{
                                pathname: "/game",
                                state: "Test"// your data array of objects
                            }}>
                        <button type="button" className="button-37">Start Game</button>
                    </Link>
                </footer>
            </div>
        </div>
        </div>
    </span>
        )
    }
    
}
