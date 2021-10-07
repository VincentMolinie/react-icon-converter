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
    const itemStyle = { color: 'black', height: '40px', width: '40px' };
    const pickerStyle = { position: 'absolute', top: 0, right: '50px' };
    const className = `fa fa-2x fa-${this.state.icon.icon}`;
    const picker = this.state.shouldDisplayPicker ? (
      <Picker
        onSelect={(value) => {
          this.state.icon.emoji = value;
        }}
        style={pickerStyle}
      />
    ) : null;

    return (
      <div style={containerStyle}>
        <i className={className} style={itemStyle} />
        <span
          onClick={this.setState({
            shouldDisplayPicker: !this.state.shouldDisplayPicker,
          })}
        >
          {this.state.icon.emoji}
        </span>
        {picker}
      </div>
    );
  }
}
