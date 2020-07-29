import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import "react-alice-carousel/lib/alice-carousel.css";
import SideMenu from "./SideMenu/SideMenu";
import styles from './App.module.scss';
import Header from "./Header/Header";
import AlbumGrid from "./AlbumGrid/AlbumGrid";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomeGrid from "./HomeGrid/HomeGrid";

Amplify.configure(awsconfig);

function App() {
    return (
        <div className={styles.app}>
            <Router>
                <Header/>
                <SideMenu align='left'/>
                <Switch>
                    <Route path="/album">
                        <AlbumGrid album="Costa Rica 2013" className={styles.photoGrid}/>
                    </Route>
                    <Route>
                        <HomeGrid />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
