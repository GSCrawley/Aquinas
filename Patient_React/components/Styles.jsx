import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Colors = {
  primary: '#ce835f',
  secondary: '#767a83',
  background: '#d6c0b0',
  text: '#333333',
  inputField: '#f0e8e2',
  border: '#ededed',
};

export const Typography = {
  fontFamily: 'Arial', // You can replace this with your preferred font family
  fontSize: 16,
};

export const Spacing = {
  padding: 16,
  margin: 16,
};

export const ContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
});

export const TextStyles = StyleSheet.create({
  body: {
    ...Typography,
    color: Colors.text,
    fontSize: Typography.fontSize,
  },
  heading: {
    ...Typography,
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export const ButtonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.padding,
    paddingHorizontal: Spacing.padding * 2,
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.padding,
    paddingHorizontal: Spacing.padding * 2,
    borderRadius: 8,
  },
  buttonText: {
    ...Typography,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
