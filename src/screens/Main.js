import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Keyboard
} from "react-native";
import styled from "styled-components/native";
import { Audio } from "expo-av";

export default function() {
  const [countdown, setCountdown] = React.useState(0);
  const [timerStarted, setTimerStarted] = React.useState(false);

  const soundObject = new Audio.Sound();

  const alarmPlay = async () => {
    console.log("alarm playing");
    try {
      await soundObject.loadAsync(require("../../assets/audio/alarm1.wav"));
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    let interval = null;
    if (timerStarted && countdown !== 0) {
      interval = setInterval(() => {
        setCountdown(countdown => countdown - 1);
      }, 1000);
    } else if (timerStarted && countdown === 0) {
      alarmPlay();
      setTimerStarted(false);
      clearInterval(interval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerStarted, countdown]);

  return (
    <Main>
      <StyledTimer> {countdown} </StyledTimer>

      {/* <Button title="Start" onPress={setTimerStarted} /> */}

      <ScrollView keyboardShouldPersistTaps="handled">
        <Button
          title="Start"
          onPress={() => {
            setTimerStarted(true);
            Keyboard.dismiss();
          }}
        />

        <StyledTextInput
          onChangeText={timer => setCountdown(timer)}
          keyboardType={"number-pad"}
        ></StyledTextInput>
      </ScrollView>
    </Main>
  );
}

const Main = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: flex-start;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  height: 40;
  border-color: grey;
  border-width: 1;
  min-width: 50;
`;

const StyledTimer = styled.Text`
  margin-top: 10;
  font-size: 50;
`;
