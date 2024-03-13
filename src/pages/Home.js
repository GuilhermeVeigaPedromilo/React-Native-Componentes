import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import HeaderPrincipal from '../components/GERAL/headerprincipal';
import styles from '../styles/styles';
import Rodape from '../components/GERAL/rodape';
import ContainerHome from '../components/HOME/corpohome';

export default function ExemploButtonTxt() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/fundohome.jpg')} style={styles.body} >
        <HeaderPrincipal/>
        <ContainerHome/>
        <Rodape/>
        </ImageBackground>
    </View>
  );
}
