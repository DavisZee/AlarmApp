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

export const timer_button_styles = StyleSheet.create({
  tri_up_button: {
    width: 0,
    height: 0,
    borderLeftWidth: 15, // size adjustments
    borderRightWidth: 15,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#000000', // color of triangle
    marginHorizontal: 10, // spacing between buttons
  },
  tri_down_button: {
    width: 0,
    height: 0,
    borderLeftWidth: 15, // size adjustments
    borderRightWidth: 15,
    borderTopWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#000000', // color of triangle
    marginHorizontal: 10, // spacing between buttons
  }, 
  triangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10, // spacing from the timer below
  },
  button_border: {
    backgroundColor: 'transparent',
    padding: 10,
  },
});

export const timer_comp_styles = StyleSheet.create({
  timerContainer: {
    alignItems: 'center',
    margin: 20,
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 24,
    color: 'gray',
  },
});

export const popup_styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export const home_popup_styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pickerItem: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});