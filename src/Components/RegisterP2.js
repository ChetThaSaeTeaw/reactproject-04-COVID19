import React, { useState , useEffect } from 'react'
import { ThaiData } from '../data';

function RegisterP2({ nextPage , textButton }) {
    const [ lng , setLng ] = useState([]);
    useEffect(() => {
        const thaiLng = ThaiData.map(({lng}) => (
            <option>{lng}</option>
        ))
    setLng(thaiLng);
    }, []);
    return (
        <div className="nav-register">
            <form className="form-register">
            <h1>Register Page</h1>
            <div className="box-sub-register">
                <div className="box-inside">
                    <label>Longtitude</label>
                    <select>
                        {lng}
                    </select>
                </div>
                <div className="box-inside">
                    <label>BloodType</label>
                    <select>
                        <option>A </option>
                        <option>B </option>
                        <option>O </option>
                        <option>AB</option>
                    </select>
                </div>
            </div>
                <div className="box-inside">
                <label>congenital disease</label>
                <textarea cols="30" rows="5"></textarea>
                </div>
            <div className="box-sub-register">
                <div className="box-inside">
                    <labe>Vacinated</labe>
                    <select>
                        <option>ยังไม่ได้รับวัคซีน</option>
                        <option>ได้รับวัคซีนแล้ว</option>
                    </select>
                </div>
                <div className="box-inside">
                    <label>vaccinatedDoses</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            </div>
            <div className="box-sub-register">
                <div className="box-inside">
                <label>vaccinationDetails</label>
                <select>
                    <option>Sinovac</option>
                    <option>AstraZeneca</option>
                    <option>Pfizer</option>
                    <option>Covishield</option>
                    <option>Johnson</option>
                    <option>Moderna</option>
                    <option>Sinopharm</option>
                </select>
                </div>
                <div className="box-inside">
                <label>GotBed</label>
                <select>
                    <option>ยังไม่ได้เตียง</option>
                    <option>ได้เตียงแล้ว</option>
                </select>
                </div>
            </div>
            <div className="box-sub-register">
                <div className="box-inside">
                    <label>Hospital</label>
                    <input type="text" placeholder="กรอกชื่อโรงพยาบาล" />
                </div>
                <div className="box-inside">
                    <label>CreateDate</label>
                    <input type="date" />
                </div>
            </div>
            <div className="box-sub-register">
                <div className="box-inside">
                    <label>UpdateDate</label>
                    <input type="date" />
                </div>
            </div>
            <div className="box-sub-register">  
                <button onClick={nextPage} className="resgister-button">{textButton}</button>
            </div>
            </form>
        </div>
    )
}

export default RegisterP2;
