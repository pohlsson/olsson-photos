import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import "react-alice-carousel/lib/alice-carousel.css";
import SideMenu from "./SideMenu/SideMenu";
import styles from './App.module.scss';
import Header from "./Header/Header";
import {usePhotos} from "../hooks/usePhotos";
import AlbumGrid from "./AlbumGrid/AlbumGrid";

Amplify.configure(awsconfig);

function App() {
    const [photos, errors] = usePhotos();

    console.log(photos)

    return (
        <div className="App" className={styles.app}>
            <Header/>
            <SideMenu align='left'/>
            <AlbumGrid className={styles.photoGrid} photos={photos} />
            <SideMenu align='right'/>
        </div>
    );
}

export default App;
