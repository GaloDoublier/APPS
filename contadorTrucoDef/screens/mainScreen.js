import { ImageBackground,StyleSheet,Text, View,Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function MainScreen() {

  const[ellos,setEllos] = useState(0);
  const[nos,setNos] = useState(0);
  const[imgNos,setImgNos] = useState()

  return (
   <View style={styles.container}>
    <ImageBackground source={require('../images/fondo.jpg')} style={styles.image} >
        <Text style={styles.titulo}>contador</Text>
        <View style={styles.lineaHorizontal1}></View>
        <View style={{marginTop:"15%"}}>
          <Text style={{color:"#fff",position:"absolute",left:"20%",fontSize:40}}>Nos:</Text>
          <Text style={{color:"#fff",position:"absolute",left:"35%"}}>{nos}</Text>
          <Text style={{color:"#fff",position:"absolute",left:"59%",fontSize:40}}>Ellos:</Text>
          <Text style={{color:"#fff",position:"absolute",left:"90%"}}>{ellos}</Text>
        </View>

      {/* imagenes */}
      <View style={styles.fosforosNos}>
      <Image style={{height: 700,width:95, resizeMode: 'contain'}} source={{uri:"https://raw.githubusercontent.com/Joacz/fosforos/main/fosforos-"+nos+".png"}}></Image>
      </View> 


      <View style={styles.fosforosEllos}>
          <Image style={{height: 400,maxHeight:500,width:70, resizeMode: 'contain',position:"relative",left:20,bottom:64}} source={require(`../images/fosforos-1.png`)}></Image>
      </View>

        <View style={styles.lineaHorizontal2}></View>
        <View style={styles.lineaVertical}></View>
        <View style={styles.botonesDerecha}>
          <Ionicons onPress={()=>{  if(0<=ellos && ellos<30){setEllos(ellos+1)}}} name="add-circle-outline"size={55} color="#fff" />
          <Ionicons onPress={()=>{if(0<ellos && ellos<=30){setEllos(ellos-1)}}}name="remove-circle-outline"size={55} color="#fff" />
        </View>
        <View style={styles.botonesIzquierda}>
          <Ionicons onPress={()=>{if(0<=nos && nos<30){setNos(nos+1)}}} name="add-circle-outline"size={55} color="#fff" />
          <Ionicons onPress={()=>{if(0<nos && nos<=30){setNos(nos-1)}}}name="remove-circle-outline"size={55} color="#fff" />
        </View>
    </ImageBackground>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        height:"100%",
        width:"100%"
      },
      titulo:{
        color:"#fff",
        textAlign:"center",
        fontSize:40,
      },
      lineaHorizontal1:{
        borderWidth:2,
        borderColor:"#fff",
        position:"absolute",
        width:"70%",
        left:60,
        top:"20%"
      },
      lineaHorizontal2:{
        borderWidth:2,
        borderColor:"#fff",
        position:"absolute",
        width:"70%",
        left:60,
        top:"50%"
      },
      lineaVertical:{
        borderWidth:3,
        borderColor:"#fff",
        position:"absolute",
        width:"0%",
        height:"70%",
        left:"49%",
        top:"13%"
      },
      botonesDerecha:{
        position:"absolute",
        left:"87%",
        top:"35%"
      },
      botonesIzquierda:{
        position:"absolute",
        left:"1.5%",
        top:"35%"
      },
      fosforosEllos:{
        position:"absolute",
        left:"60%",
        top:"30%"
      },
      fosforosNos:{
        position:"absolute",
        left:"18%",
        top:"9%"
      }
  });