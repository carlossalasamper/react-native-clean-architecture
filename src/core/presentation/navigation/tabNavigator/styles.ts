import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../constants/colors';
import {CustomTextStyle} from '../../constants/typography';

export default StyleSheet.create({
  rectangleTopTab: {
    width: scale(20),
    height: scale(2),
    backgroundColor: COLORS.WHITE,
  },
  rectangleTopTabWhite: {
    width: scale(20),
    height: scale(2),
    backgroundColor: COLORS.WHITE,
  },
  hitSlop: {
    top: scale(15),
    bottom: scale(15),
    left: scale(15),
    right: scale(15),
  },
  blockRoutes: {
    flexDirection: 'row',
    borderTopRightRadius: scale(32),
    borderTopLeftRadius: scale(32),
  },
  containerIconWrapper: {
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomMenuContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.BLUE_258F78,
  },
  cartBadge: {
    position: 'absolute',
    top: '20%',
    right: '25%',
    backgroundColor: 'red',
    width: 15,
    height: 15,
    zIndex: 1,
    borderRadius: 99999,
  },
  tabText: {
    ...CustomTextStyle.smallNormal,
    color: COLORS.WHITE_FBF8CC,
  },
  tabTextActive: {
    ...CustomTextStyle.captionBold,
    color: COLORS.WHITE_FBF8CC,
    textTransform: 'uppercase',
  },
  blockRoutesContainer: {
    height: 1,
    width: '100%',
    position: 'absolute',
    zIndex: 100,
    elevation: 2,
    top: -3.5,
    borderColor: 'transparent',
  },
  wrapBottomTabContainer: {
    height: '100%',
    paddingTop: scale(10),
  },
  wrapIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapTitleContainer: {marginTop: 'auto'},
  bottomTabIcon: {
    height: scale(24),
    width: scale(24),
    borderRadius: 999,
  },
});
