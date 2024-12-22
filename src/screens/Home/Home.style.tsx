import {StyleSheet} from 'react-native';
import {Theme} from '../../Theme';

export const Style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Theme.colors.dark.background,
    paddingHorizontal: 20,
  },
  flexibleContainer: {
    flex: 1,
  },
  contentContainer: {
    gap: 20,
    flex: 1,
  },
  contentDescription: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  usageInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usageDescriptionContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
});
