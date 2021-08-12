import React from 'react';
import {
  Text,
  View,
  SafeAreaView, TouchableOpacity,
  Image, StyleSheet
} from 'react-native'

import { connect } from 'react-redux';

import { SIZES, COLORS, FONTS, icons } from '../constants'

import { toggleTheme } from "../stores/themeActions";

const HeaderBar = ({ appTheme, toggleTheme }) => {

  function toggleThemeHandler() {
    if (appTheme.name == "light") {
      toggleTheme("dark")
    } else {
      toggleTheme("light")
    }
  }


  return (
    <SafeAreaView style={{
      height: 120,
      width: "100%",
      backgroundColor: COLORS.purple,
      flexDirection: 'row'
    }}>
      {/**Greetings */}
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.padding,
          marginTop: 10
        }}
      >
        <Text style={{
          color: COLORS.white,
          ...FONTS.h2
        }}>Milton,</Text>
        <Text style={{
          color: COLORS.white,
          ...FONTS.h2
        }}>Welcome Back!</Text>
      </View>


      {/**Toggle Button */}

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginHorizontal: SIZES.padding,
          borderRadius: 20,
          height: 40,
          backgroundColor: COLORS.lightPurple,
          marginTop: 10
        }}
        onPress={() => toggleThemeHandler()}
      >
        {/**Sun */}

        <View style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          ...(appTheme.name == "light") ? styles.
          selectedLightModeStyle : {}
        }}>
          <Image source={icons.sunny}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white
            }}
          />
        </View>

        {/**Moon */}

        <View style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          ...(appTheme.name == "dark") ? styles.
          selectedNightModeStyle : {}
        }}>
          <Image source={icons.night}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow
  }
})


function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);