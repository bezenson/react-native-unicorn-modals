import type { PropsWithChildren } from 'react';
import React from 'react';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';

import { useModalsContext } from '../hooks/useModalsContext';

import ModalOverlay from './ModalOverlay';

const styles = StyleSheet.create({
  dismissTouchable: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface ModalWithOverlayProps {
  onDismiss: () => void;
  visible: boolean;
}

const ModalWithOverlay: React.FC<PropsWithChildren<ModalWithOverlayProps>> = ({ children, onDismiss, visible }) => {
  const { options } = useModalsContext();
  return (
    <Modal
      animationType="none"
      hardwareAccelerated={options.hardwareAccelerated}
      onRequestClose={onDismiss}
      visible={visible}
      transparent={true}
    >
      <ModalOverlay />
      <TouchableOpacity activeOpacity={1} onPress={onDismiss} style={styles.dismissTouchable}>
        {children}
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalWithOverlay;
