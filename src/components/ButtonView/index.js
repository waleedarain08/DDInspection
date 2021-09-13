import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, TouchableNativeFeedback, View, Platform } from "react-native";
// import Util from "../../util";

export default class ButtonView extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    children: PropTypes.node.isRequired,
    rippleOnAndroid: PropTypes.bool
  };

  static defaultProps = {
    style: {},
    rippleOnAndroid: false
  };

  render() {
    const { style, children, rippleOnAndroid, ...rest } = this.props;

    if (Platform.OS=="android") {
      return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#aeaeae')} {...rest}>
          <View style={style}>{this.props.children}</View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity style={style} activeOpacity={0.7} {...rest}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
