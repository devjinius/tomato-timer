import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      // start interval
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);

      // 여기서 setState를 안해주면 나중에 clear할 때 timerInterval에 접근할 수가 없다.
      // 그래서 timer state에 저장하여(props로 줄 필요가 없기 때문에) 꺼내서 사용한다.
      this.setState({
        timerInterval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      // clear interval
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {_formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {isPlaying === false ? (
            <Button iconName="play-circle" onPress={startTimer} />
          ) : (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

function _formatTime(time) {
  const minutes = parseInt(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 100,
    fontWeight: "100"
  }
});

export default Timer;
