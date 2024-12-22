import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
  },
  cardContainer: {
    width: 130,
    height: 160,
    alignItems: 'center',
    gap: 12,
  },
  status: {
    display: `flex`,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
