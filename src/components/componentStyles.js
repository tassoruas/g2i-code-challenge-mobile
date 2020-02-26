import { StyleSheet } from 'react-native';
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
    backgroundColor: '#d5d5d5',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center'
  },
  genericButton: {
    maxHeight: dimensions.fullHeight * 0.06,
    minHeight: dimensions.fullHeight * 0.035,
    borderRadius: 80,
    minWidth: 150,
    justifyContent: 'center',
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
  },
  buttonText: {
    color: 'black',
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '1%'
  }
});
