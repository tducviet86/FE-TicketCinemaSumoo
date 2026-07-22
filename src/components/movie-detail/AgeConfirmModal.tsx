import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import styles from "../../screens/MovieDetail/movieDetail.styles";


interface Props {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const AgeConfirmModal = ({
  visible,
  onCancel,
  onConfirm,
}: Props) => {
  return (
    <Modal
      isVisible={visible}
      animationIn="bounceInUp"
      animationOut="fadeOutDown"
      backdropOpacity={0.7}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>
          Xác nhận độ tuổi
        </Text>

        <Text style={styles.modalContent}>
          Phim này được phân loại T18.
          {"\n\n"}
          Bạn xác nhận mình đã đủ 18 tuổi và muốn tiếp tục đặt vé?
        </Text>

        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onCancel}
          >
            <Text style={styles.cancelText}>
              Huỷ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={onConfirm}
          >
            <Text style={styles.confirmText}>
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(AgeConfirmModal);