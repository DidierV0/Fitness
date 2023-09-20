import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'

const headerImage = require('./assets/images/header.jpg')
const notification = require('./assets/images/Notification.png')
const banner = require('./assets/images/BG.png')
const model = require('./assets/images/model.png')

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Header/>
        <ScrollView style={styles.screen}>
          <Banner/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default App

const Header = () => <View style={styles.header}>
  <ImageContainer image={headerImage} />
  <HeaderTitle/>
  <ImageContainer image={notification} height={'50%'} width={'50%'} />
</View>

const Banner = () =>( 
<ImageBackground style={styles.banner} source={banner}>
  <View style={{flex: 1, justifyContent: 'center'}}>
    <Text>Offres Limitées</Text>
    <Text>30% de Réduction</Text>
    <Text>Ventes Flash</Text>
  </View>
  <View style={{flex:1}}>
    <Image 
      source={model} 
      style={{
        position: 'absolute', 
        bottom: 0, 
        zIndex: 10, 
        height:'100%', 
        width:'100%'
      }} 
    />
  </View>
</ImageBackground>
)

const ImageContainer = ({image, height='100%', width='100%'}) => (
  <View style={styles.imageContainer}>
    <Image 
      source={image} 
      style={[styles.image, {height, width} ]} 
    />
  </View>
)

const HeaderTitle = () => (
  <View style={styles.title}>
    <Text style={styles.bigTitle}>Hi Jane</Text>
    <Text style={styles.smallTitle} >20 Sept 23</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {padding: 15, flexDirection: 'row', alignItems: 'center'},
  title: {paddingHorizontal: 10,flex: 1, justifyContent: 'center'},
  bigTitle: {fontSize: 16, fontFamily: 'Poppins-Medium'},
  smallTitle: {fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.6},
  image: {height: '100%', width: '100%'},
  banner: {
    padding: 10, 
    flex: 1, 
    resizeMode: 'contain',
    borderRadius: 20,
    // overflow: 'hidden',
    flexDirection:'row'
  },
  imageContainer: {
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    overflow: 'hidden',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  screen: {margin: '3%', flex: 1}
})