import React from 'react';
import "./home.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import $ from 'jquery';


export default function Home(props){
    let navigate = useNavigate();
    const location = useLocation();

    $(document).ready(function () {
        $('.button-36').click(function () {
            var name = $('#input').val();
            if (name != null && name != "") {
                var playercard = $('<div class="playerCard"> <h2>' + name + '</h2 > <div class="playerCard_btn" id="playerCard_btn"><i class="fa fa-gear" id="settings"></i></div><div class="playerCard_btn" id="playerCard_btn" > <i class="fa fa-minus" id="remove"></i></div></div >');
                playercard.hide();
                $('#list').append(playercard);
                playercard.fadeIn(500);
                $('#input').val('');
            } else {
                alert("Error: Empty input")
            }
        });
    
        $('.button-37').click(function () {
            var IDs = $("#list .playerCard h2")         // find spans with ID attribute
            .map(function() { return $(this).text(); }) // convert to set of IDs
            .get();
            if(IDs.length >= 4){
                navigate("/game", {state:{name:IDs}});
            }else{
                alert("You need atleast 4 players to start");
            }
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
        if(location.state != null){
            location.state.name.forEach(element => {
                var playercard = $('<div class="playerCard"> <h2>' + element + '</h2 > <div class="playerCard_btn" id="playerCard_btn"><i class="fa fa-gear" id="settings"></i></div><div class="playerCard_btn" id="playerCard_btn" > <i class="fa fa-minus" id="remove"></i></div></div >');
                        playercard.hide();
                        $('#list').append(playercard);
                        playercard.fadeIn(500);
                        $('#input').val('');
            });
            $('.header').hide();
            $('.container').show();
        }else{
            $('.header').show();
            $('.container').hide();
        }
    });

    /*
    */
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
                    <div className="add-player-title"><h2>SVÄLLES PICCOLO</h2></div>
                    <br />
                    <label className="custom-field two">
                        <input id="input" placeholder="&nbsp;" />
                        <span className="placeholder">Enter name</span>
                    </label>
                    <button className="button-36">Add</button>
                    <br />
    
                    <ul id="list">
                    </ul>
                    <footer>
                        <button type="button" className="button-37">Start Game</button> 
                    </footer>
                </div>
            </div>
            </div>
        </span>
            )
}
