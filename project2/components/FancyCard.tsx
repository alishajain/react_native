import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{ uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ' }} style={styles.cardImage} />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Beautiful Art</Text>
          <Text style={styles.cardLabel}>Google</Text>
          <Text style={styles.cardDescription}>It is a very beautiful piece of Indian Art</Text>
          <Text style={styles.cardFooter}>Google Images</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: "#333",
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },

  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: '#211345'
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },

  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 6
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6
  },
  cardFooter: {
    color: '#000000'
  }

})

export default FancyCard;