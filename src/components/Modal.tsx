import type { PropsWithChildren } from 'react';
import React from 'react';
import { Modal, type ModalProps, StyleSheet, TouchableOpacity } from 'react-native';

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

const supportedOrientations: ModalProps['supportedOrientations'] = [
  'portrait',
  'portrait-upside-down',
  'landscape-left',
  'landscape-right',
];

const ModalWithOverlay: React.FC<PropsWithChildren<ModalWithOverlayProps>> = ({ children, onDismiss, visible }) => {
  const { options } = useModalsContext();
  return (
    <Modal
      animationType="none"
      hardwareAccelerated={options.hardwareAccelerated}
      onRequestClose={onDismiss}
      supportedOrientations={supportedOrientations}
      transparent={true}
      visible={visible}
    >
      <ModalOverlay />
      <TouchableOpacity activeOpacity={1} onPress={onDismiss} style={styles.dismissTouchable}>
        {children}
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalWithOverlay;
