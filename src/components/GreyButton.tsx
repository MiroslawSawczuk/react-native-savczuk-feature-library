import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
}
export const GreyButton: FC<Props> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#898989',
    backgroundColor: '#c3c3c3',
  },
});
