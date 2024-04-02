import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal= {true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8 
    },

    container: {
        padding: 8
    },

    card: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 4,
      margin: 8
    },

    elevatedCard: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
          width:1,
          height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})

export default ElevatedCards;