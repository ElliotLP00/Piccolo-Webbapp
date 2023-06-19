
import React, {useState } from 'react'
import { foreplayQ } from '../../questionsJS/foreplay.js';
import { draggQ } from '../../questionsJS/dragg';
import { extremDraggQ } from '../../questionsJS/extremdragg';
import { kanViSupaQ } from '../../questionsJS/KanViSupa.js';
import { kannaOchKlammaQ } from '../../questionsJS/kannaOchKlamma.js';
import { doOrDrinkQ } from '../../questionsJS/doOrDink.js';
import { moaDLC } from '../../questionsJS/moaDLC.js';
import {useLocation,useNavigate} from 'react-router-dom';
import Switch from "react-switch";
import './game.css'
import $ from 'jquery';
import { useEffect } from 'react';



const Game=(props)=>{
        let navigate = useNavigate();
        const location = useLocation();
        console.log(location.state.name);
        var alltasks
        var virusText ;
        var clientnames;
        var virus ;
        useEffect(()=>{
            $(document).ready(function () {
                alltasks= [];
                virusText= ""
                clientnames = location.state.name
                virus = 0
                $('.button-quit').click(function () {
                    console.log("quit");
                    //let isExecuted = confirm("Are you sure you want to quit this game?");
                    //console.log(isExecuted); // OK = true, Cancel = false
                    quitForm()
                  
                });
            
                $('.content').click(function (e) {
                    console.log("\n\n")
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
        })
        
        
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
                    navigate("/", {state:{name:location.state.name}});  
                }
            }
        
            const goToNextCard = ()=>{
               // 
               var info = ""
               var newTask = {info:"Deafult"}
                if (virus == 1) {
                    newTask.info = virusText;
                    virus--;
                } else {
                    var randomVal = Math.floor(Math.random() * alltasks.length);
                newTask = alltasks[randomVal];
                var info = newTask.info;
                console.log("All tasks length: "+ alltasks.length);
                console.log("Random: "+randomVal);
                console.log("NewTask.info: "+ newTask.info);
                console.log("Virus: "+ virus);
                var pr = newTask.requiedAmountOfPlayers
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
                
                console.log("I GAME: PR:"+pr)
                console.log("info.count(#)="+(info.split('#').length - 1))
                if (pr != 0 && info.split('#').length - 1===pr) {
                    var strVirus = "";
                    var resVirus = [];
                    if (newTask.virus != null) {
                        strVirus = virusText;
                        resVirus = strVirus.split('#');
                        strVirus = resVirus[0];
                    }
                    var str = info;
                    var res = str.split('#');
                    console.log("RES L:"+res.length);
                    str = res[0];
                    var usersAvaliable = clientnames;
                    
                    for (var i = 1; i < pr+1 ; i++) {
                        var randomNumber = (Math.floor(Math.random() * usersAvaliable.length));
                        if (newTask.virus != null) {
                            strVirus += usersAvaliable[randomNumber];
                            strVirus += resVirus[i];
                        }
                        str += usersAvaliable[randomNumber];
                        str += res[i]
                        usersAvaliable = usersAvaliable.filter(item => item != usersAvaliable[randomNumber]);
                        
                    }
        

                    if (newTask.virus != null) {
                        virusText = strVirus;
                    }
                    info = str
                }
                const filteredData = alltasks.filter(item => item.info !== alltasks[randomVal].info);
                alltasks = filteredData;
                newTask.info = info;
                if (virus > 1) {
                    virus--;
                }
            }

            if(newTask.image == null){
                var i = Math.floor(Math.random() * 33) + 1;
                $('.content div img').attr("src",require('../../assets/Moa/MOA' + i + '.JPG').default)
            }

            $('.content div h2').text(newTask.info);
            $('.content div img').attr("src",newTask.image);
            if(alltasks.length == 0){
                alert("DE E SLUT");
            }
            return newTask;

        }
            

            const initTasks=()=> {
                var pretask = [];
                //pretask.push(doOrDrinkQ.results);
                /*if (this.state.mode == "Foreplay"){
                    pretask.push(foreplayQ.results);
                }else if (this.state.mode == "Dragg"){
                    pretask.push(draggQ.results);
                    pretask.push(kannaOchKlammaQ.results);
                }else if (this.state.mode == "KannaOchKlamma"){
                    pretask.push(kannaOchKlammaQ.results);
                }else if (this.state.mode == "KanViSupa") {
                    pretask.push(kanViSupaQ.results);
                }else if (this.state.mode == "All") {
                    pretask.push(foreplayQ.results);
                    pretask.push(draggQ.results);
                    pretask.push(kannaOchKlammaQ.results);
                    pretask.push(kanViSupaQ.results);
                    //pretask.push(doOrDrinkQ.results);
                    //pretask.push(extremDraggQ.results);
                 }   */
                //pretask.push(draggQ.results);
                pretask.push(kannaOchKlammaQ.results);
                pretask.push(kanViSupaQ.results);
                pretask.push(doOrDrinkQ.results);
                //pretask.push(extremDraggQ.results);
                //pretask.push(foreplayQ.results);
                pretask.push(moaDLC.results);
                alltasks = [];
                for (var i = 0; i < pretask.length; i++) {
                    for (var o = 0; o < pretask[i].length; o++) {
                        alltasks.push(pretask[i][o]);
                        //console.log("Alltask ("+i+") ("+o+") info:"+pretask[i][o].info)
                    }
                }
                pretask = alltasks;
                //this.state.tasks = alltasks;
            }
        
        });

        
        const [checked, setChecked] = useState(false);
        const handleChange = nextChecked => {
            setChecked(nextChecked);
        };
        
        
        
    return (
    <span>
        <div className='content'>
            <div>
                <img width={require('../../assets/Moa/MOA1.JPG').default.width} src={require('../../assets/Moa/MOA1.JPG').default}/>
                <h2>Här kommer ett påstående som eller utmaning som någon ska göra</h2>
            </div>
        </div>
        <div className='header-game'>
            <button className="button-quit">Back</button>
        </div>
        
        
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
        <footer>
            <button className="button-settings" onClick={()=>{$('.settings').toggle("show");}}>Settings</button>
        </footer>
        <div className='settings'>
            <h1>Settings</h1>
            <div className='options'>
                <div>
                    <u>Do or drink</u>
                    <Switch className="s" onChange={handleChange} checked={checked} />
                </div>
                <div>
                    <u>Kan vi supa?</u>
                    <Switch className="s" onChange={handleChange} checked={checked} />
                </div>
                <div>
                    <u>Extrem Drägg</u>
                    <Switch className="s" onChange={handleChange} checked={checked} />
                </div>
                <div>
                    <u>Drägg</u>
                    <Switch className="s" onChange={handleChange} checked={checked} />
                </div>
                <div>
                    <u>Moa DLC</u>
                    <Switch className="s" onChange={handleChange} checked={checked} />
                </div>
                <div>
                    <u>Känna och klämma</u>
                    <Switch className="s" onChange={handleChange} checked={checked} />
                </div>
            </div>
        </div>
    </span>
    )
  }


export default Game;
  