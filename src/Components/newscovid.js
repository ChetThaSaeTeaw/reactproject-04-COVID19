import React , { useState , useEffect } from 'react';
import './newscovid.css';
import axios from 'axios';

function Newscovid() {

    const [ covid19 , setCovid19 ] = useState("");
    const [ error , setError ] = useState("");
    //const days = new Date().toString()

    useEffect(() => {
        axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
        .then((response) => {
            setCovid19(response.data[0]);
        })
        .catch(error => {
            setError(error);
        })
    }, [])

    if(!covid19) return "กรุณารอสักครู";
    if(error) return `Error : ${error.message}`;

    return (
        <div className="container-news">
            <div className="title-box">
                <h1>อัปเดตสถานณ์ COVID-19ในไทย</h1>
                <h1>{error}</h1>
                <div className="days-box"><h2>{covid19.update_date}</h2></div>
            </div>
            <div className="content-box">
                <div className="subcontent home">
                    <h4>หายป่วยวันนี้</h4>
                    <h2>{covid19.new_recovered}</h2>
                </div>
                <div className="subcontent plus">
                    <h4>ติดเชื้อเพิ่มวันนี้</h4>
                    <h2>{covid19.new_case}</h2>
                </div>
                <div className="subcontent clean-accumulate">
                    <h4>หายป่วยสะสม</h4>
                    <h2>{covid19.total_recovered}</h2>
                </div>
                <div className="subcontent infect-accumulate">
                    <h4>ป่วยสะสม</h4>
                    <h2>{covid19.total_case}</h2>
                </div>
                <div className="subcontent treat">
                    <h4>เสียชีวิตเพิ่มวันนี้</h4>
                    <h2>{covid19.new_death}</h2>
                </div>
                <div className="subcontent sorry">
                    <h4>เสียชีวิตทั้งหมด</h4>
                    <h2>{covid19.total_death}</h2>
                </div>
            </div>
            <div className="overlay"></div>
            <footer className="footer-news"><h5>สรุปสถานการณ์ ศูนย์ข้อมูล COVID-19</h5></footer>
        </div>
    )
}

export default Newscovid;
