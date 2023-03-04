
import React, { Component } from 'react'
import { foreplayQ } from '../../questionsJS/foreplay.js';
import { draggQ } from '../../questionsJS/dragg';
//import { extremDraggQ } from '../../questionsJS/extremdragg';
import { kanViSupaQ } from '../../questionsJS/KanViSupa.js';
import { kannaOchKlammaQ } from '../../questionsJS/kannaOchKlamma.js';
import { doOrDrinkQ } from '../../questionsJS/doOrDink.js';
import { moaDLC } from '../../questionsJS/moaDLC.js';

import './game.css'
import $ from 'jquery';

export default class game extends Component {
    constructor(props){
        super(props);
       
        $(document).ready(function () {
            var alltasks = [];
            var virusText = "";
            var clientnames = ["Elliot", "Elise", "Julle", "Jennifer"];
            var virus = 0;

            $('.button-quit').click(function () {
                console.log("quit");
                //let isExecuted = confirm("Are you sure you want to quit this game?");
                //console.log(isExecuted); // OK = true, Cancel = false
                quitForm()
              
            });
        
            $('.button-settings').click(function () {
                console.log("Settings")
                $('.settings').toggle("show");
               
            });
        
            $('.content').click(function (e) {
                console.log("content clicked")
                if(alltasks.length == 0){
                    initTasks();
                }
                goToNextCard();     
            });
        
            $('.toggle input[type="checkbox"]').click(function () {
                $(this).parent().toggleClass('on');
        
                if ($(this).parent().hasClass('on')) {
                    $(this).parent().children('.label').text('On')
                } else {
                    $(this).parent().children('.label').text('Off')
                }
            });
        
            $('.checkbox input[type="checkbox"]').click(function () {
                $(this).parent().toggleClass('on');
        
                if ($(this).parent().hasClass('on')) {
                    $(this).parent().children('.label').text('On')
                } else {
                    $(this).parent().children('.label').text('Off')
                }
            });
        
            $('.radio input[type="radio"]').click(function () {
                $(this).parent().addClass('on');
        
                if ($(this).parent().hasClass('on')) {
                    $(this).parent().children('.label').text('On')
                }
            });
            $('input').focusin(function () {
                $(this).parent().addClass('focus');
            });
            $('input').focusout(function () {
                $(this).parent().removeClass('focus');
            });
        
            const ui = {
                confirm: async (message) => createConfirm(message)
            }
        
            const createConfirm = (message) => {
                return new Promise((complete, failed) => {
                    $('#confirmMessage').text(message)
        
                    $('#confirmYes').off('click');
                    $('#confirmNo').off('click');
        
                    $('#confirmYes').on('click', () => { $('.confirm').hide(); complete(true); });
                    $('#confirmNo').on('click', () => { $('.confirm').hide(); complete(false); });
        
                    $('.confirm').show();
                });
            }
        
            const quitForm = async () => {
                const confirm = await ui.confirm('Are you sure you want to quit this game?');
        
                if (confirm) {
                    alert('yes clicked');
                } else {
                    alert('no clicked');
                }
            }
        
            const goToNextCard = ()=>{
               // 
                const Random = Math.floor(Math.random() * alltasks.length);
                var newTask = alltasks[Random];
                var info = newTask.info
                if (virus == 1) {
                    newTask.info = virusText;
                    virus--;
                } else {
                    if (newTask.virus != null) {
                        if (virus > 0) {
                            while (newTask.virus != null) {
                                const Random = Math.floor(Math.random() * alltasks.length);
                                newTask = alltasks[Random];
                                info = newTask.info
                            }
                        } else {
                            virusText = newTask.virus;
                            virus = Math.floor(Math.random() * 8) + 5;
                        }
                    }
                const pr = newTask.requiedAmountOfPlayers
                if (pr != 0) {
                    var strVirus = "";
                    var resVirus = [];
                    if (newTask.virus != null) {
                        strVirus = virusText;
                        resVirus = strVirus.split("#");
                        strVirus = resVirus[0];
                    }
                    var str = info;
                    var res = str.split("#");
                    str = res[0];
                    var used = clientnames;
                    for (var i = 1; i < pr+1; i++) {
                        var randomNumber = Math.floor(Math.random() * used.length);
                        if (newTask.virus != null) {
                            strVirus += used[randomNumber];
                            strVirus += resVirus[i];
                        }
                        str += used[randomNumber];
                        str += res[i]
                        used = used.filter(item => item != used[randomNumber]);
                    }
                    if (newTask.virus != null) {
                        virusText = strVirus;
                    }
                    info = str
                }
                newTask.info = info;
                const filteredData = alltasks.filter(item => item.info !== alltasks[Random].info);
                alltasks = filteredData;
                if (virus > 1) {
                    virus--;
                }
            }
            $('.content div h2').text(newTask.info);
            $('.content div img').attr("src",newTask.image);
            return newTask;

        
            }
            

            const initTasks=()=> {
                var pretask = [];
                //pretask.push(doOrDrinkQ.results);
                //if (this.state.mode == "Foreplay"){
                    //pretask.push(foreplayQ.results);
                //}else if (this.state.mode == "Dragg"){
                    //pretask.push(draggQ.results);
                    //pretask.push(kannaOchKlammaQ.results);
                //}else if (this.state.mode == "KannaOchKlamma"){
                    //pretask.push(kannaOchKlammaQ.results);
                //}else if (this.state.mode == "KanViSupa") {
                    //pretask.push(kanViSupaQ.results);
                //}else if (this.state.mode == "All") {
                    /*pretask.push(foreplayQ.results);
                    pretask.push(draggQ.results);
                    pretask.push(kannaOchKlammaQ.results);
                    pretask.push(kanViSupaQ.results);*/
                    //pretask.push(doOrDrinkQ.results);
                    //pretask.push(extremDraggQ.results);
                // }   
                pretask.push(moaDLC.results);
                alltasks = [];
                for (var i = 0; i < pretask.length; i++) {
                    for (var o = 0; o < pretask[i].length; o++) {
                        alltasks.push(pretask[i][o]);
                    }
                }
                pretask = alltasks;
                //this.state.tasks = alltasks;
                console.log(alltasks.length)
            }
        
        });
    }  
    render() {
    return (
    <span>
        <div className='content'>
            <div>
                
                <img width={require('../../assets/Moa/MOA1.PNG').default.width} src={require('../../assets/Moa/MOA1.PNG').default}/>
                <h2>Här kommer ett påstående som eller utmaning som någon ska göra</h2>
            </div>
        </div>
        <div className='header-game'>
            <button className="button-quit">Back</button>
        </div>
        <footer>
            <button className="button-settings">Settings</button>
        </footer>
        
        <div className="confirm">
            <div></div>
            <div>
                <div id="confirmMessage"></div>
                <div>
                    <input id="confirmYes" type="button" value="Yes" />
                    <input id="confirmNo" type="button" value="No" />
                </div>
            </div>
        </div>
        
        
    </span>
    )
  }
}

