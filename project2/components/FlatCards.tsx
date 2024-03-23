import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const FlatCards = () =>{
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.red]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8 
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    red: {
        backgroundColor: '#EF5354'
    },

    green: {
        backgroundColor: '#50DBB4'
    },

    blue: {
        backgroundColor: '#5DA3FA'
    }
})

export default FlatCards;