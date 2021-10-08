import React from 'react';

export default class DisplayMapping extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      version: 0,
    };
  }

  get hashMapping() {
    const hashMapping = {};
    this.props.iconsMapping.forEach((iconMapping) => {
      hashMapping[iconMapping.icon] = iconMapping.emoji;
    });
    return hashMapping;
  }

  render() {
    const isNotComplete = this.props.iconsMapping.some(
      (iconMapping) => !iconMapping.emoji
    );
    const buttonStyle = {
      width: '100%',
      height: '50px',
      color: 'black',
      marginBottom: '10px',
    };
    const textareaStyle = {
      width: '100%',
      height: '100px',
    };
    const isNotCompleteComponent =
      this.state.version === 0 || !isNotComplete ? null : (
        <span style={{ fontSize: '40px', color: 'black' }}>NOT COMPLETE</span>
      );
    const textComponent =
      this.state.version === 0 ? null : (
        <textarea
          value={JSON.stringify(this.hashMapping)}
          style={textareaStyle}
          readOnly={true}
        />
      );
    return (
      <div>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ version: this.state.version + 1 })}
        >
          Print Result
        </button>
        {isNotCompleteComponent}
        {textComponent}
      </div>
    );
  }
}
