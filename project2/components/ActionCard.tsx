import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Whats new in JavaScript 21?
                    </Text>
                </View>
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', }}
                    style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        As a mobile app developer, we know there are multiple platforms like iOS and Android. When we are developing any application you need two developers who can separately develop apps for Android and iOS but what if a single developer can develop apps for both platforms which will give an advantage like cost-cutting. So single code base that targets multiple platforms is everyone looking for. So, react-native is one of technology which provides us multi-platform development. Whenever I tried to understand or learn react-native I always had a question in my mind like why we need to do environment setup and for that why need of all these dependencies or all other tools. And in search of that, I figure out the basic idea of it which we will understand in this blog.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://medium.com/@heritage.tech/how-to-implement-passwordless-authentication-with-passkey-using-react-native-and-node-js-part-1-51e64d1577e6')}>
                       <Text style={styles.socialLinks}>Read more...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://www.instagram.com/jain_alisha14/')}>
                       <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
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
        marginHorizontal: 16,
        marginVertical: 12
    },

    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },

    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },

    cardImage: {
        height: 190
    },

    bodyContainer: {
        padding: 10
    },

    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4
    }
})
export default ActionCard;