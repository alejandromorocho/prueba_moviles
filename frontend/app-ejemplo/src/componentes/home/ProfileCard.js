import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const whatsapp = <Icon name={'whatsapp'} size={60} color={'#4b0082'}/>
const twitch = <Icon name={'twitch'} size={60} color={'#4b0082'}/>
const microsoft = <Icon name={'file'} size={60} color={'#4b0082'}/>
const snapchat = <Icon name={'snapchat'} size={60} color={'#4b0082'}/>
const github = <Icon name={'github'} size={60} color={'#4b0082'}/>
const ProfileCard = () => {
    const user = {
        avatar: "https://scontent.fuio5-1.fna.fbcdn.net/v/t31.18172-8/16178565_1313525098708128_1234675970302349400_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeHotM7iWYGQ09zAi1iqnhP2au6gzQWI8BRq7qDNBYjwFKEvCGgZahguy4534mye07qooqScghFt2ZoilbA41AfC&_nc_ohc=DATNbxJW1i4AX9zal9g&_nc_ht=scontent.fuio5-1.fna&oh=00_AfC1sWPsjqk01DnNH6vhwi7xFZA1kZP-BatG3u2JM8OnUw&oe=65DFFE6E",
        coverPhoto: "https://as2.ftcdn.net/v2/jpg/02/15/12/33/1000_F_215123306_MvWXZdZfNUXmPlz4EZb4227F7s0CjQ4w.jpg",
        name: "Daniel Alejandro Morocho"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

            <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.twitch.tv/alejandro_nello')
                }}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://wa.me/593987026490')
                }}>
                    {whatsapp}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://dev.azure.com/damorocho/')
                }}>
                    {microsoft}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.snapchat.com/add/alejandrosixx')}>
                    {snapchat}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://github.com/alejandromorocho')}>
                    {github}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', //para que ocupe todo el lugar
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: { //posicion de foto de perfil
        alignItems: 'center',
        marginTop: -75
    },
    avatar: { //margen de la foto
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonContainer: { //posicion de los botones de rrss
        flexDirection: 'row',
        marginTop: 30,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard