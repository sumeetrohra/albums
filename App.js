// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//attempt to create a component

const App = () => (
    <View style={{ flex: 1, marginBottom: 10 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);


//render it to device
export default App;
