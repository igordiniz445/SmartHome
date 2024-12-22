import {StyleSheet} from 'react-native';
import {Theme} from '../../../Theme';
export const Style = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    height: 45,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  imageContainer: {},
  imageAvatar: {
    width: 36,
    height: 36,
  },
  description: {
    flexDirection: 'column',
  },
  notification: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderColor: Theme.colors.dark.darkBlue,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
