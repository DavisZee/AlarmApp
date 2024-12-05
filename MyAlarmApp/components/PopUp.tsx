import React from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { popup_styles } from '../screens/styles';

interface PopUpProps {
  visible: boolean;
  onClose: () => void;
  bodyText: string;  // Prop for dynamic content
}

const PopUp: React.FC<PopUpProps> = ({ visible, onClose, bodyText }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={popup_styles.overlay}>
        <View style={popup_styles.popup}>
          <Text style={popup_styles.popupText}>{bodyText}</Text> {/* Display custom body text */}
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;
