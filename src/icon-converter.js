import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import React from 'react';

export default class IconConverter extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      shouldDisplayPicker: false,
      icon: this.props.icon,
    };
  }

  render() {
    const containerStyle = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    };
    const itemStyle = { color: 'black', height: '41px', width: '40px' };
    const pickerStyle = {
      position: 'absolute',
      top: 0,
      left: '80px',
      zIndex: 10,
    };
    const className = `fa fa-2x fa-${this.state.icon.icon}`;
    let picker = null;
    if (this.state.shouldDisplayPicker) {
      picker = (
        <Picker
          onSelect={(value) => {
            this.state.icon.emoji = value.native;
            this.setState({
              shouldDisplayPicker: !this.state.shouldDisplayPicker,
            });
          }}
          style={pickerStyle}
        />
      );
    }

    const emojiStyle = {
      width: '40px',
      height: '40px',
      fontSize: '40px',
      lineHeight: '40px',
    };
    if (!this.state.icon.emoji) {
      emojiStyle.backgroundColor = 'grey';
    }
    const onClick = () => {
      this.setState({
        shouldDisplayPicker: !this.state.shouldDisplayPicker,
      });
    };
    return (
      <div style={containerStyle}>
        <i className={className} style={itemStyle} />
        <span onClick={onClick} style={emojiStyle}>
          {this.state.icon.emoji}
        </span>
        {picker}
      </div>
    );
  }
}
