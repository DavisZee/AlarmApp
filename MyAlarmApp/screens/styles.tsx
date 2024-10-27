// screens/styles.tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54EAB0',
    paddingTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#DAD5D5',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
});

export const bt_card_styles = StyleSheet.create({
    card: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        overflow: 'hidden', // ensures beveled edges by clipping child views
        margin: 10,
        width: '90%',
        alignSelf: 'center',
        elevation: 4, // adds shadow on android
        shadowColor: '#000', // add shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        position: 'absolute',
        top: 20,
    },
    cardHeader: {
        backgroundColor: '#C0C0C0',
        padding: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardBody: {
        padding: 15,
        alignItems: 'center', // Center the text horizontally
        justifyContent: 'center', // Center the text vertically
    },
    bodyText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center'

    },
});

export const timer_styles = StyleSheet.create({
    card: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        overflow: 'hidden', // ensures beveled edges by clipping child views
        margin: 10,
        width: '90%',
        alignSelf: 'center',
        elevation: 4, // adds shadow on android
        shadowColor: '#000', // add shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    cardBorder: {
        backgroundColor: '#C0C0C0',
        padding: 10,
    },
    timerButton: {
    backgroundColor: '#FF5733',
    padding: 12,
    borderRadius: 8,
  },
  controlButton: {
    color: '#FFD700',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});