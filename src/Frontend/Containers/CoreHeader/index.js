import React from 'react'
import {
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet
} from 'react-native'

import { width, height } from 'react-native-dimension'

import gStyles from '../../../Common/GlobalStyles'
import CoreHeader from './CoreHeader'

class CoreLayoutContainer extends React.Component {
dismissKeyboard = () => Keyboard.dismiss()
get renderContent () {
  const {
    customRightIcon,
    customRightStyle,
    rightView,
    rightAction,
    children,
    style,
    title,
    headerStyle,
    leftAction,
    headerCustomView,
    disabledCustomRightIcon
  } = this.props
  return (
    <View style={gStyles.backgroundDefault}>
      <CoreHeader
        customRightIcon={customRightIcon}
        customRightStyle={customRightStyle}
        title={title}
        headerStyle={headerStyle}
        rightAction={rightAction}
        rightView={rightView}
        leftAction={leftAction}
        customView={headerCustomView}
        disabledCustomRightIcon={disabledCustomRightIcon}
        _this={this}
      />
      <View style={styles.container}/>
      <View style={[gStyles.backgroundDefault, style]}>
        <StatusBar barStyle='light-content'/>
        {children}
      </View>
    </View>
  )
}

render () {
  const { isTouchDisable = false } = this.props
  return (
    isTouchDisable
      ? <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
        {this.renderContent}
      </TouchableWithoutFeedback>
      : this.renderContent
  )
}
}

const heightNavBar = height(11.5)
const styles = StyleSheet.create({
  container: {
    height: heightNavBar + height(1),
    width: width(100),
    justifyContent: 'center',
    backgroundColor: '#FFCD02'
  }
})

export default CoreLayoutContainer
