import React , { useState , useEffect } from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse , Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';

function Home() {
    const [ checked , setChecked ] = useState(false);
    const useStyels = makeStyles(theme => ({
        root : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            flexDirection : 'column',
            maxwidth: '800px',
            height: '100vh',
            margin: '0 auto',
            textAlign : 'center',
            cursor: 'pointer',
        },
        title : {
            color: '#fff',
            fontWeight : 'bold',
            margin: '25px 0',
        },
        text : {
            color: '#fff',
        },
        link_button : {
            textDecoration : 'none',
            margin: '10px 0',
        },
        button : {
            color: "#fff",
        }
    }))

    const classes = useStyels();
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <React.Fragment>
           <Collapse in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1500 } : {})} collapsedHeight={50}>
            <div className={classes.root}>
                <h1 className={classes.title}>Well Come to Home Page</h1>
                <p className={classes.text}>มันเกิดขึ้นตอนได้ดูการแข่งขันฟุตบอลของทีมในอังกฤษ ที่มีผู้ชมค่อนข้างแน่นสนาม หลังจากทีมเชียร์ยิงประตูได้</p>
                <Link to="/infomation" className={classes.link_button}><Button className={classes.button}>อัพเดทสถานการณ์โควิดล่าสุด <KeyboardArrowRightIcon /></Button></Link>
            </div>
            </Collapse>
            <div className="overlay"></div>
        </React.Fragment>
    )
}

export default Home;
