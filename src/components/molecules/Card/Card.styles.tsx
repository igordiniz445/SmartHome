import {StyleSheet} from 'react-native';
import {Theme} from '../../../Theme';

export const Styles = StyleSheet.create({
  cardContainer:{
    alignSelf: 'flex-start',
    borderRadius: 20,
    backgroundColor: Theme.colors.dark.background,
  },
  gradientBorder: {
    padding: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  cardContent: {
    position: 'absolute',
    flex: 1,
    borderRadius: 16,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInsideContent:{
    padding: 20
  }
});
