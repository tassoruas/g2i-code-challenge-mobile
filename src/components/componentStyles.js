import { StyleSheet } from 'react-native';
import colors from '../helpers/colors';
import { Dimensions, PixelRatio } from 'react-native';

const dimensions = {
  fullHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height),
  fullWidth: PixelRatio.roundToNearestPixel(Dimensions.get('window').width)
};

export default StyleSheet.create({
  resultList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: 10
  },
  modalViewNoConnection: {
    height: '30%',
    width: '100%',
    backgroundColor: colors.themePrimary,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  modalText: {
    width: '80%',
    fontSize: 20,
    fontWeight: '400',
    color: colors.themeSecondary,
    textAlign: 'center'
  },
  genericButton: {
    maxHeight: dimensions.fullHeight * 0.08,
    minHeight: dimensions.fullHeight * 0.045,
    minWidth: dimensions.fullWidth * 0.4,
    borderRadius: 5,
    justifyContent: 'center',
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
  },
  buttonText: {
    color: 'black',
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '1%'
  }
});
