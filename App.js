import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import styled from "styled-components";
import shiv_square from "./assets/shiv_square.png";
import chevron_down from "./assets/chevron_down.png";
import ellipses from "./assets/ellipses.png";
import home from "./assets/home.png";
import plus from "./assets/plus.png";
import hand from "./assets/hand.png";
import document from "./assets/document.png";
import jordan from "./assets/jordan.jpg";
import sidd from "./assets/sidd.jpg";
import nav from "./assets/nav.jpg";

export default function App() {
  let ScreenHeight = Dimensions.get("window").height;
  const roomContainerHeight = ScreenHeight - 120 - 100 - 10;
  return (
    <Container>
      <Header>
        <LeftHeader>
          <Image
            source={chevron_down}
            style={{ height: 20, width: 20, marginRight: 5 }}
          />
          <Text style={{ fontWeight: "500", fontSize: 16 }}>All rooms</Text>
        </LeftHeader>
        <RightHeader>
          <Image
            source={document}
            style={{ height: 25, width: 25, marginRight: 10 }}
          />
          <ProfilePhoto source={shiv_square} />
        </RightHeader>
      </Header>
      <RoomContainer style={{ height: roomContainerHeight }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ letterSpacing: 2, fontWeight: "600", fontSize: 12 }}>
              MAKERS
            </Text>
            <Image
              source={home}
              style={{ height: 15, width: 15, marginLeft: 10 }}
            />
          </View>
          <View>
            <Image source={ellipses} style={{ height: 20, width: 20 }} />
          </View>
        </View>
        <RoomTitle>We build our ideas in public</RoomTitle>
        <SpeakerContainer>
          <Speaker>
            <SpeakerPhoto source={jordan} />
            <SpeakerName>Jordan</SpeakerName>
          </Speaker>
          <Speaker>
            <SpeakerPhoto source={nav} />
            <SpeakerName>Nav</SpeakerName>
          </Speaker>
          <Speaker>
            <SpeakerPhoto source={sidd} />
            <SpeakerName>Sidd</SpeakerName>
          </Speaker>
          <Speaker>
            <SpeakerPhoto source={shiv_square} />
            <SpeakerName>Shiv</SpeakerName>
          </Speaker>
        </SpeakerContainer>
        <Text
          style={{
            color: "#e5e5e5",
            fontSize: 14,
            fontWeight: "400",
            paddingLeft: 20,
          }}
        >
          Followed by the speakers
        </Text>
        <AudienceContainer>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
          <Listener>
            <ListenerPhoto source={shiv_square} />
            <ListenerName>Shiv</ListenerName>
          </Listener>
        </AudienceContainer>
      </RoomContainer>
      <BottomBar>
        <LeaveButton>
          <Text style={{ color: "red", fontWeight: "500" }}>
            ✌🏽 Leave quietly
          </Text>
        </LeaveButton>
        <View style={{ flexDirection: "row" }}>
          <RoundButton>
            <Image source={plus} style={{ height: 20, width: 20 }} />
          </RoundButton>
          <RoundButton>
            <Image source={hand} style={{ height: 20, width: 20 }} />
          </RoundButton>
        </View>
      </BottomBar>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f2f0e4;
  align-items: center;
  justify-content: center;
`;

const Header = styled.View`
  position: absolute;
  top: 75px;
  width: 100%;
  padding: 0px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LeftHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;
const RightHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 12px;
  margin-left: 20px;
`;

const RoomContainer = styled.ScrollView`
  position: absolute;
  top: 120px;
  background-color: #fff;
  width: 100%;
  margin-top: 10px;

  /* height: 75%; */
  border-radius: 50px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 30px;
  /* border-radius: 51px 51px 0 0; */
`;

const RoomTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  margin: 10px 0;
`;

const SpeakerContainer = styled.View`
  flex-direction: row;
  padding: 10px 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Speaker = styled.View`
  align-items: center;
  min-width: 30%;
  margin: 10px 0;
`;
const SpeakerPhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 30px;
`;
const SpeakerName = styled.Text`
  font-weight: 500;
  margin-top: 5px;
  font-size: 14px;
`;

const AudienceContainer = styled.View`
  flex-direction: row;
  padding: 10px 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Listener = styled.View`
  align-items: center;
  min-width: 23%;
  margin: 10px 0;
`;
const ListenerPhoto = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 25px;
`;
const ListenerName = styled.Text`
  font-weight: 500;
  margin-top: 5px;
  font-size: 12px;
`;

const BottomBar = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100px;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
`;

const LeaveButton = styled.View`
  width: 150px;
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  background-color: #e5e5e5;
  justify-content: center;
`;

const RoundButton = styled.View`
  background-color: #e5e5e5;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;
